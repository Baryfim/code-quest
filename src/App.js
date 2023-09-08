import { useEffect, useState } from 'react';
import MonoWindow from './components/UI/MonoWindow/MonoWindow';
import ProgressBar from './components/UI/progressbar/ProgressBar';
import './styles/App.css'
import QuestContent from './components/QuestContent';
import QuestServices from './API/questServices';
import { useFetching } from './hooks/useFetching';
import Loader from './components/UI/Loader/Loader';
import Trophy from './images/trophy.svg'
import TButton from './components/UI/TButton/TButton';

function App() {
  const [labels, setLabels] = useState([])
  const [step, setStep] = useState(1)
  const [rating, setRating] = useState(0)

  let [fetchLabels, isLabelsLoading, labelsError] = useFetching(async() => {
    let posts = await QuestServices.getAll()
    setLabels(posts)
  })

  useEffect(() => {
    fetchLabels()
  }, [])

  return (
    <div className="App">
      {
        labelsError &&
          <h1 className='error'>Произошла ошибка: {labelsError}</h1>
      }
      {
          isLabelsLoading
          ? <Loader />
          : (
            <MonoWindow>
            {
              step === labels.length+1
              ? (
                <div>
                  <ProgressBar progress={step-1} max={labels.length}/>
                  <div className='TrophyBlock'>
                    <img src={Trophy} alt='Trophy' className='TrophyImage'/>
                  </div>
                  <div className='InfoBlock'>
                    <h2>Only <span style={{color: "#3FC1C9"}}>{rating}</span> correct answers out of <span style={{color: "#FC5185"}}>{step-1}</span></h2>
                  </div>
                  <div className='btnsBlock'>
                    <TButton
                      style={{backgroundColor: "#3FC1C9"}}
                      onClick={() => {
                        setRating(0)
                        setStep(1)
                      }}>
                        Start again
                    </TButton>
                    <TButton
                      style={{backgroundColor: "#FC5185"}}
                    >
                      Check answers
                    </TButton>
                  </div>
                </div>
              )
              : (<div>
                <ProgressBar progress={step} max={labels.length}/>
                <QuestContent
                  callback={setStep}
                  step={step}
                  labels={labels}
                  rating={rating}
                  setRating={setRating}
                />
              </div>)
            }
          </MonoWindow>
          )
      }
    </div>
  );
}

export default App;