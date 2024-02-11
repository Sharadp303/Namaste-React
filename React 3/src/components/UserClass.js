import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    // this.state={
    //   count:0,
    //   count2:2
    // }

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Mumbai",
      },
    };

    console.log("constructor");
  }

  async componentDidMount() {
    console.log("didMount"); //API CALL
    // this.timer=setInterval(()=>{
    //   console.log("Namaste|||||");
    // },1000)

    const data = await fetch("https://api.github.com/users/Sharadp303");
    const json = await data.json();

    console.log(json);

    this.setState({ userInfo: json });
  }
  componentDidUpdate(prevProps, prevState) {
    // if(this.state.count!==prevState.count){

    // }
    console.log("Component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("WiLL Unmount");
  }
  render() {
    console.log("render");
    // const {name,location}=this.props
    // const {count,count2}=this.state

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      //
      //   <h1>{count}</h1>
      //   <h1>{count2}</h1>
      //   <button onClick={
      //       ()=>{
      //           this.setState({
      //               count:this.state.count+1,
      //               count2:this.state.count+1,
      //           });
      //       }
      //   }>CLick</button>

      <div className="w-1/4 m-auto flex flex-wrap justify-center items-center flex-col border border-black rounded-3xl my-5 shadow-lg shadow-gray-700 max-sm:w-2/3">
        <img
          src={avatar_url}
          alt="avatar"
          className="w-36 m-2 p-2 rounded-full bg-black object-cover"
        />
        <h1 className="font-bold text-xl p-4 ">Name: {name}</h1>
        <h3 className="font-semibold text-lg p-2">Loation : {location}</h3>
        <h3 className="font-semibold text-lg p-2 my-2">Contact : @sharad03</h3>
      </div>
    );
  }
}
export default UserClass;
