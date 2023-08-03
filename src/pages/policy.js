import {
    PrismicRichText,
    useAllPrismicDocumentsByType,
} from "@prismicio/react";

const PrivacyPolicy = () => {
    const [documents] = useAllPrismicDocumentsByType("policy");
    console.log("doc", documents);

    return (
        <>
            <h1>Privacy Policy</h1>
            {documents && (
                <PrismicRichText field={documents[0].data.description} />
            )}
        </>
    );
};

export default PrivacyPolicy;
