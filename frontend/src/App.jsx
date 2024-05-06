import './App.css'

function RenderName(props) {
  const { name, gender } = props;
  const color = gender === 'female' ? 'lightcoral' : 'midnightblue';

  return (
    <div style={{ color: color }}>
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
