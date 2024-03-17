export interface IExtractFramesParams {
	/** Extract one frame at the given timestamp & ignore other options */
	timestamp?: number
	/** Number of seconds to ignore at the begining of the video */
	skipStart?: number
	/** Number of seconds to ignore at the end of the video */
	skipEnd?: number
	/** The number of random frames to extract; the first one will alwways be at position 0 or at `skip` seconds */
	count?: number
}

export async function extractFrames(
	file: string,
	params: IExtractFramesParams = {},
): Promise<string[]> {
	const options = { skipStart: 3, skipEnd: 3, count: 4, ...params }
	const video = document.createElement('video')
	const canvas = document.createElement('canvas')
	const context = canvas.getContext('2d') as CanvasRenderingContext2D

	return new Promise((resolve, reject) => {
		video.preload = 'auto'
		video.src = file
		video.crossOrigin = '*'
		video.onerror = reject
		video.oncanplaythrough = (evt) => {
			video.oncanplaythrough = null
			resolve(performExtraction())
		}
	})

	async function performExtraction(): Promise<string[]> {
		const frames = [] as string[]
		const markers = []
		let minLimit = 0
		let maxLimit = video.duration

		if (options.skipStart + options.skipEnd < video.duration) {
			minLimit = options.skipStart
			maxLimit = video.duration - options.skipEnd
		}

		canvas.width = video.videoWidth
		canvas.height = video.videoHeight

		switch (true) {
			case options.timestamp !== undefined:
				markers.push(options.timestamp || 0)
				break
			case options.count < 2:
				markers.push(randomNumber(minLimit, maxLimit))
				break
			default:
				const randomMarkers = randomSequence(options.count - 1, minLimit, maxLimit)
				markers.push(minLimit, ...randomMarkers)
		}

		for (const marker of markers) {
			frames.push(await extractFrameAt(marker))
		}

		return frames
	}

	async function extractFrameAt(position: number): Promise<string> {
		return new Promise((resolve, reject) => {
			video.onseeked = (evt) => {
				video.onseeked = null
				context.drawImage(video, 0, 0)
				resolve(canvas.toDataURL())
			}

			video.currentTime = position
		})
	}
}

export function randomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomSequence(size: number, min: number, max: number) {
	const delta = (max - min) / size
	const values = []

	for (let i = 0; i < size; i++) {
		const start = min + delta * i
		values.push(randomNumber(start, start + delta))
	}

	return values
}

