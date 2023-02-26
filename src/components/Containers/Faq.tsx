import * as React from 'react';

interface FAQProps {
    question: string;
    answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {

    return (
        <>
            <div className="flex flex-col group  rounded-xl overflow-hidden hover:scale-110 transition-all ease-in-out duration-500 hover:z-40 relative max-w-sm w-[95%] justify-between items-center glass cursor-pointer">
                <h2 className="text-2xl font-bold absolute flex justify-center items-center text-center p-5 w-full h-full group-hover:scale-0 ease-in-out duration-500 transition-all">{question}</h2>
               <p className='p-10 scale-0 text-2xl font-semibold  max-h-72 overflow-auto group-hover:scale-100 ease-in-out duration-500 text-center'>
                {
                    answer
                }
               </p>
            </div>
        </>
    );
};

export default FAQ;