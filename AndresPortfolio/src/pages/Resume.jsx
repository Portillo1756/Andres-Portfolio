import AndresResume from "../assets/AndresResume.pdf"

export default function Resume() {
    return(
    <section id="resume" className="resume--section">
        <div className="resume--section--content--box">
            <div className="resume--section--content">
                <p className="resume--title">RESUME</p>
                        <embed src={AndresResume} width="100%" height="100%" />
            </div>
        </div>
    </section>
    )
}