import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import ChapterImage from "@/components/chapterImage";
import React, { useRef } from "react";
import Footnote from "@/components/footnote";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <article className="prose">
      <div className="space-y-12">
        <div id="chapter-heading" className="relative mx-auto md:max-w-3xl">
          <div className="bg-primary text-typography relative z-20 mb-24 w-full rounded-lg p-2 shadow-md md:p-6">
            <h1 className="flex gap-12">
              <span>3</span>{" "}
              <span>Proposals: Pathways to Interoperability</span>
            </h1>
          </div>
          <ChapterImage />
        </div>

        <div className="bg-primary text-typography relative mx-auto rounded-lg p-2 pr-6 shadow-md md:max-w-3xl md:p-6 md:pr-12">
          <p>
            An exposed operational surface allowing internal and external users
            to interact with an organisation's internal functionalities could
            guide organisational primitives with functions akin to a software
            service's Application Programming Interface (API). Existing examples
            of exposed application surfaces include public technical platforms
            such as Transport for London's open data Q API, or organisational
            knowledge bases such as wikis.
            <Footnote no="1" />
            <Footnote no="2" /> The UK government's Contracts Finder interface
            is another example of an exposed organisational surface for well-
            defined procurement needs.
            <Footnote no="3" /> Whether as a partnership approach or a public
            resource, interfaces that enable as-vet-unknown users to plug in to
            an organisation's backend functionalities allow more bottom-up and
            permissionless forms of ecosvstemic innovation
          </p>
          <p>
            Like decentralisation, openness ✐ can lead to its own enclosure. For
            example, Uber makes use of Transport for London data even as it
            thwarts regulatory oversight, while many of the most important
            open-source ✐ projects are managed by Google and Meta.
            <Footnote no="4" />
            In order to maintain a balance between openness ✐ and risk, a
            traceable decentralised protocol between service users and
            providers, along with 117 flexible licensing arrangements, would
            enable complex interoperations across the cultural ecosystem.
          </p>
          <p>
            Like decentralisation, openness ✐ can lead to its own enclosure. For
            example, Uber makes use of Transport for London data even as it
            thwarts regulatory oversight, while many of the most important
            open-source ✐ projects are managed by Google and Meta.
            <sup>4</sup>
            In order to maintain a balance between openness ✐ and risk, a
            traceable decentralised protocol between service users and
            providers, along with 117 flexible licensing arrangements, would
            enable complex interoperations across the cultural ecosystem.
          </p>
          <p>
            Like decentralisation, openness ✐ can lead to its own enclosure. For
            example, Uber makes use of Transport for London data even as it
            thwarts regulatory oversight, while many of the most important
            open-source ✐ projects are managed by Google and Meta.
            <sup>4</sup>
            In order to maintain a balance between openness ✐ and risk, a
            traceable decentralised protocol between service users and
            providers, along with 117 flexible licensing arrangements, would
            enable complex interoperations across the cultural ecosystem.
          </p>
        </div>
        <div className="h-24"></div>
      </div>
    </article>
  );
}
