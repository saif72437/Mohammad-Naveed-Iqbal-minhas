function App(){
  return (
    <div>
      <Button value="signup"/>
      <Button value={"create blog"}/>
      <Button/>
      <Button/>
    </div>
  )
}
export default App


function Button({value}){
  return (
    <button>{value}</button>
  )
}