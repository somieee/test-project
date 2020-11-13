import React from 'react';

function Age(props){
    console.log('props: ', props)
    return (
        <div>
            {props.displayAge}
        </div>
    );
}

// class Name extends React.Component {
//     static defaultProps = {
//         displayName: 'Dasom Hwang',
//     }
//     render (){
//         return (
//             <div>
//                 {this.props.displayName}
//             </div>
//         );
//     }
// }



// Name.defaultProps = {
//     name: "홍길동"
// }
export default Age;