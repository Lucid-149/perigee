import { Page } from "../model/app";
import { FAQ } from "../../components/Containers";
import QUESTIONS from "../../data/content/faq.json";
const FaqPage: Page = {
    name: "Faq",
    image: "/images/faq.webp",
    head: {
        title: "",
        description: "",
        keywords: "",
    },
    url: "/faq",
    protected: false,
    sections: [
        {
            index: 0,
            name: "Faq",
            component: <FaqComponent />,
        },
    ],
};

export default FaqPage;

function FaqComponent () {
    return (
        <div className="flex flex-col gap-4 w-full  pt-20 px-10">
            <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
            <div className="flex flex-wrap w-full justify-center items-center gap-4 overflow-auto max-h-[80vh]">
                {QUESTIONS.map((question, index) => (
                    <FAQ key={index} question={question.Q} answer={question.A} />
                ))}
            </div>
        </div>
    );
}
