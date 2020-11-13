import React from 'react';

function Name(props){
    console.log('props: ', props)
    return (
        <div>
            {props.displayName}
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
export default Name;