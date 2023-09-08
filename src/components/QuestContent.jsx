import Button from "./UI/button/Button";

const QuestContent = ({callback, labels, step, setRating, rating}) => {
    let W = 32;
    if (labels[step-1].question.length >= 37) {
        W = 20
    } else if (labels[step-1].question.length >= 24) {
        W = 23;
    }
    shuffle(labels[step-1].answers)
    return (
        <div>
            <div className="titleBlock">
                <h1 className="title" style={{fontSize: `${W}px`}}>
                    {step}. {labels[step-1].question}
                </h1>
            </div>
            <div className="container__btns">
                {labels[step-1].answers.map((label, index) => 
                    <Button
                        key={label.id}
                        onClick={() => {
                            if (label.id === labels[step-1].answer) {
                                setRating(rating+1)
                            }
                            callback(step+1)
                        }}>
                        {index+1}. {label.description}
                    </Button>
                )}
            </div>
        </div>
    )
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default QuestContent;