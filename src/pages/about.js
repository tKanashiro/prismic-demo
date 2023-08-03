import {
    PrismicRichText,
    SliceZone,
    useAllPrismicDocumentsByType,
} from "@prismicio/react";
import { components } from "../slices";

const About = () => {
    const [documents] = useAllPrismicDocumentsByType("about");
    console.log("doc", documents);

    return (
        <>
            <h1>About</h1>
            {documents && (
                <div>
                    <PrismicRichText field={documents[0].data.description} />
                    <SliceZone
                        slices={documents[0].data.slices}
                        components={components}
                    />
                </div>
            )}
        </>
    );
};

export default About;
