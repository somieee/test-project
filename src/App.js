import React, { Component, useState, useEffect, useCallback, useMemo } from 'react';
import { BrowserRouter, } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import Name from './shared/Name';
// import Age from './shared/Age';
// import NameButton from './shared/nameButton';

import One from './pages/One';
import Two from './pages/Two';
import Three from './pages/Three';

import RootRouter from './routers/RootRouter';
import HeaderTabs from './shared/HeaderTabs';


// css 변수처럼 사용가능
// <header className = {styles.appHeader}>
// props - attribute처럼 쓰면됌 (e.g. name)
// const pages = [
//   {
//     displayName: 'One',
//     value: 1
//   },

//   {
//     displayName: 'Two',
//     value: 2
//   },

//   {
//     displayName: 'Three',
//     value: 3
//   },
  
// ];
  // const players = [
  //   {
  //     name: '흥민',
  //     age: 17
  //   },
  //   {
  //     name: '지성',
  //     age : 23
  //   },
    
  // ];


function App(){
  return (
    <BrowserRouter>
      <HeaderTabs />
      <RootRouter />
    </BrowserRouter>
  );
}

// function App() {

//   const [historyIndex, setHistoryIndex] = useState(0);

//   const currentPage = useMemo(() => {
//     console.log('currentPage:', window.location.pathname.split('/')[1]);
//     return Number(window.location.pathname.split('/')[1]);
//   }, [historyIndex])

//   // const [currentPage, setCurrentPage] = useState(pages[0]);
//   // useEffect(() => {
//   //   console.log('currentPage:', currentPage);
//   // }, [currentPage])

//   return (
//     <div>
//       <div>
//       {pages.map((page, pI) => {
//         const current = page.value === currentPage;
//         return (
//           <span 
//             key = {pI}
//             onClick={() => {
//               window.history.pushState({}, page.displayName, `/${page.value}`);
//               setHistoryIndex(historyIndex+1);
//             }}
//             style={{
//               marginRight: '10px',
//               textDecoration: 'none',
//               color: current ? 'skyblue' : 'black',
//             }}
//             >
//             {page.displayName}
//             </span>
//         );
//       })}
//     </div>

//   {currentPage === 1 && <One />}
//   {currentPage === 2 && <Two />}
//   {currentPage === 3 && <Three />}
//       </div>
//   );
// }
  // const [currentPlayer, setCurrentPlayer] = useState('');
  // const changePlayer = useCallback(player =>{
  //   setCurrentPlayer(player);
  // }, [setCurrentPlayer]);

  // const currentPlayerAge = useMemo(()=> {
  //   return currentPlayer.age;
  // }, [currentPlayer]);

  // return (
  //   <div>
  //     <div>
  //       {players.map((player, pI) => {
  //         return (
  //           <NameButton
  //             key ={pI}
  //             name={player.name}
  //             onClickEvent={() => changePlayer(player)}
  //             />
  //         );
  //       })}
  //     </div>
  //     <br />
  //     <br />

  //     안녕, 나는 <Name displayName={currentPlayer.name}/>
  //     <br />
  //     내 나이는, <Age displayAge={currentPlayer.age} />
  //   </div>
  // );
  
  // //[state, setState]
  // const [currentName, setCurrentName] = useState('');

  // useEffect(() => {
  //   console.log('component did mount');
  // }, []);

  // useEffect(() => {
  //   currentName && alert(`이름이 바뀌었습니다: ${currentName}`);
  // }, [currentName]);

  // const changeName = useCallback((name) => {
  //   // 'this.state.currentName = name' 하면 틀림! 
  //   console.log('changeName 호출됨');
  //   setCurrentName(name);
  // }, [setCurrentName]);
  // 위에 거랑 똑같이 동작
  // const changeName = useMemo(()=> {
  //   return name => setCurrentName(name);
  // }, [setCurrentName]);



    //State 조작을 하면 안됨.
  // return (
  //   <div>
  //     <div>
  //       <NameButton 
  //         name={'이름1'} 
  //         onClickEvent={() => changeName('유동화다!')}
  //         />
  //       <NameButton 
  //         name = {'이름2'} 
  //         onClickEvent={() => changeName('김원빈이다!')}
  //         />
  //       <NameButton 
  //         name = {'이름3'} 
  //         onClickEvent={() => changeName('Oh현우다!Oh')}
  //         />
  //     </div>
  //     <br />
  //     <br />

  //     안녕, <Name displayName={currentName}/>
  //   </div>
  // );

// class App extends React.Component {
//   state = {
//     currentName: '황다솜이다!',
//   }

//   changeName(name) {
//     // 'this.state.currentName = name' 하면 틀림! 
//     this.setState({
//       currentName: name,
//     });
//   }

//   render (){
//     //State 조작을 하면 안됨.
//     return (
//       <div>
//         <div>
//           <NameButton 
//             name={'이름1'} 
//             onClickEvent={() => this.changeName('유동화다!')}
//             />
//           <NameButton 
//             name = {'이름2'} 
//             onClickEvent={() => this.changeName('김원빈이다!')}
//             />
//           <NameButton 
//             name = {'이름3'} 
//             onClickEvent={() => this.changeName('현우다!')}
//             />
//         </div>
//         <br />
//         <br />

//         안녕, <Name displayName={this.state.currentName}/>
//       </div>
//     );
//   }
// }
export default App;
