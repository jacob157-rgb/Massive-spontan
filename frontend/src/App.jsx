import './App.css'

function RenderName(props) {
  const { name, gender } = props;
  // const color = gender === 'female' ? 'text-red-300' : 'text-sky-400';

  return (
    <div className={gender === 'female' ? 'text-red-300' : 'text-sky-400'}>
      {name}
    </div>
  )
};

function App() {

  return (
    <div>
      <RenderName name="Hellen Keller" gender="female" />
      <RenderName name="Marie Curie" gender="female" />
      <RenderName name="Albert Enstein" gender="male" />
    </div>
  )
}

export default App
