import generateRssFeed from "../../app/project/Rss/index";
import fs from "fs";
const Feed = ({ data }) => {
    // let parser = new xml2js.Parser()
    // const dataResult = parser.parseString(data, (dataResult) => dataResult)
    // return <div>{dataResult}</div>
};
export const getServerSideProps = async ({ res }) => {

    await generateRssFeed();
    const data = await fs.readFileSync('./public/rss/feed.xml', 'utf8', (err, data) => {
        if (data)
            return data;
    })
    res.setHeader("Content-Type", "text/xml");
    res.write(data);
    res.end();
    return {
        props: { data: data || null },
    };
};

export default Feed;