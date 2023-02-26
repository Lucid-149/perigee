import { useState,useLayoutEffect,useRef } from "react";

interface Props {
    text: string;
    className?: string;
}

const Text = ({ text, className }: Props) => {
   const Input = text
   const textEl = useRef<HTMLHeadingElement>(null)
    const [Text, setText] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const [charact, setCharact] = useState([])


    useLayoutEffect(() => {
        //set text to empty string
        setText("")
        //set isTyping to true
        setIsTyping(true)
    }, [Input])

    useLayoutEffect(() => {
        //if isTyping is true
        if (isTyping) {
            //set timeout to add a character to text
            const split = Input.split(" ")
            const timeout = setTimeout(() => {
                //add one split  to charact array
                setCharact((prev) => [...prev, split[prev.length]] as any)

                //if charact array length is equal to split array length
                if (charact.length === split.length) {
                    //set isTyping to false
                    setIsTyping(false)
                }
            }, 400)
            //return timeout
            return () => clearTimeout(timeout)
        }
    }, [isTyping, charact, Input])

    useLayoutEffect(() => {
        if (textEl.current) {
            const { offsetWidth } = textEl.current
            textEl.current.style.width = `${offsetWidth}px`
        }
    }, [textEl])


    return (
        <div className={className}>
            <div className="flex flex-wrap justify-center items-center gap-4 w-full text-center">

                {charact.map((char, i) => ( <h2 key={i} ref={textEl} className="slide-in-blurred-right ">{char}</h2>))}
          
            </div>
        </div>
    )
}

  
export default Text