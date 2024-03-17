// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  renderToStream,
  renderToFile,
} from "@react-pdf/renderer";

// Create styles
Font.register({
  family: "New",
  src: "https://res.cloudinary.com/dvckadoiv/raw/upload/v1709979786/NewEdgeSoftPower4_LightRounded_hqbqyb.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    fontFamily: "New",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default async function handler(req, res) {
  const MyDocument = () => (
    <Document>
      <Page size={"A5"} style={styles.body}>
        <Text style={styles.title}>
          3 Proposals Pathways to Interoperability
        </Text>
        <Text style={styles.text}>
          An exposed operational surface allowing internal and external users to
          interact with an organisation's internal functionalities could guide
          organisational primitives with functions akin to a software service's
          Application Programming Interface (API).
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber }) => `${pageNumber}`}
          fixed
        />
      </Page>
    </Document>
  );
  await renderToFile(<MyDocument />, `${__dirname}/my-doc.pdf`);
  // const pdfStream = await renderToStream(<MyDocument />);
  // res.setHeader("Content-Type", "application/pdf");
  // res.setHeader("Content-disposition", 'attachment;filename="filename.pdf"');
  // pdfStream.pipe(res);
  res.status(200).json({ name: "John Doe" });
}
