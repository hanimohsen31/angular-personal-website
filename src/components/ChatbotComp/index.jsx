import "./ChatbotComp.css";
// import React, { Component } from "react";
// import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

export const ChatbotComp = () => {
  return (
    <>
      <div className="ChatbotComp">
        <ChatBot
          floating={true}
          steps={[
            {
              id: "1",
              message: "Choose language?",
              trigger: "11",
            },

            {
              id: "11",
              options: [
                { value: 1, label: "English", trigger: "3" },
                { value: 2, label: "العربية", trigger: "100" },
              ],
            },

            {
              id: "3",
              message: "Choose one of our Services",
              trigger: "13",
            },

            {
              id: "13",
              options: [
                { value: 1, label: "Design", trigger: "4" },
                { value: 2, label: "Furniture", trigger: "5" },
                { value: 3, label: "Implementation", trigger: "6" },
              ],
            },

            {
              id: "4",
              options: [
                { value: 1, label: "Classic", trigger: "7" },
                { value: 2, label: "Modern", trigger: "8" },
              ],
            },

            {
              id: "7",
              message:
                "We have prices starting from 100LE and our prices are negotiable upon inspection, and there are also additional discounted offers if you will design and implement together.",
              trigger: "3",
            },
            {
              id: "8",
              message:
                "We have prices starting from 70LE and pour prices are negotiable upon inspection, and there are also additional discounted offers if you will design and implement together.",
              trigger: "3",
            },
            {
              id: "5",
              message:
                "Contact us immediately and do not feel hesitant.. We can manufacture the appropriate furniture for your taste at very appropriate costs, noting that the prices change according to the prices of wood and labor manufacturers.",
              trigger: "3",
            },
            {
              id: "6",
              message:
                "We have prices starting from 12% and our prices are negotiable upon inspection, and there are also additional discounted offers if you will design and implement together.",
              trigger: "3",
            },
            {
              id: "100",
              message: "اختر احدى خدماتنا",
              trigger: "130",
            },

            {
              id: "130",
              options: [
                { value: 1, label: "التصميم", trigger: "40" },
                { value: 2, label: "صناعة الاثاث", trigger: "50" },
                { value: 3, label: "تنفيذ اعمال التشطيبات", trigger: "60" },
              ],
            },

            {
              id: "40",
              options: [
                { value: 1, label: "كلاسيك", trigger: "70" },
                { value: 2, label: "مودرن", trigger: "80" },
              ],
            },

            {
              id: "70",
              message:
                "لدينا باقات اسعار تبدا من 100 جنيه مصريا والاسعار متغيرة وقابلة للتفاوض حسب المكان بعد المعاينة . وايضا يوجد لدينا خصومات كبيرة اذا كنا سنقوم لك بالتصميم والتنفيذ معا .",
              trigger: "100",
            },

            {
              id: "80",
              message:
                "لدينا باقات اسعار تبدا من 70 جنيه مصريا والاسعار متغيرة وقابلة للتفاوض حسب المكان بعد المعاينة . وايضا يوجد لدينا خصومات كبيرة اذا كنا سنقوم لك بالتصميم والتنفيذ معا .",
              trigger: "100",
            },

            {
              id: "50",
              message:
                "تواصل معنا فى الحال ولا تتردد ابدا . سنقوم بصناعة الاثاث المناسب تماما لذوقك بتكاليف مناسبة جدا مع ملاحظة ان الاسعار متغيرة حسب سعر الخامات و مصنعيات العمالة .",
              trigger: "100",
            },

            {
              id: "60",
              message:
                "لدينا باقات اسعار تبدا من 12% والاسعار متغيرة وقابلة للتفاوض حسب المكان بعد المعاينة . وايضا يوجد لدينا خصومات كبيرة اذا كنا سنقوم لك بالتصميم والتنفيذ معا .",
              trigger: "100",
            },

          ]}
        />
      </div>
    </>
  );
};

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import ChatBot from 'react-simple-chatbot';
// import "./ChatbotComp.css";

// class Review extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: '',
//       gender: '',
//       age: '',
//     };
//   }

//   componentWillMount() {
//     const { steps } = this.props;
//     const { name, gender, age } = steps;

//     this.setState({ name, gender, age });
//   }

//   render() {
//     const { name, gender, age } = this.state;
//     return (
//       <div style={{ width: '100%' }}>
//         <h3>Summary</h3>
//         <table>
//           <tbody>
//             <tr>
//               <td>Name</td>
//               <td>{name.value}</td>
//             </tr>
//             <tr>
//               <td>Gender</td>
//               <td>{gender.value}</td>
//             </tr>
//             <tr>
//               <td>Age</td>
//               <td>{age.value}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// Review.propTypes = {
//   steps: PropTypes.object,
// };

// Review.defaultProps = {
//   steps: undefined,
// };

// export class ChatbotComp extends Component {
//   render() {
//       const ShowBot = () => {
//     document.querySelector('.ChatbotComp').style.display = 'block'
//   }
//     return (
//       <>
//         <div className="ChatbotComp">

//           <ChatBot
//           floating = {true}
//             steps={[
//               {
//                 id: '1',
//                 message: 'What is your name?',
//                 trigger: 'name',
//               },
//               {
//                 id: 'name',
//                 user: true,
//                 trigger: '3',
//               },
//               {
//                 id: '3',
//                 message: 'Hi {previousValue}! What is your gender?',
//                 trigger: 'gender',
//               },
//               {
//                 id: 'gender',
//                 options: [
//                   { value: 'male', label: 'Male', trigger: '5' },
//                   { value: 'female', label: 'Female', trigger: '5' },
//                 ],
//               },
//               {
//                 id: '5',
//                 message: 'How old are you?',
//                 trigger: 'age',
//               },
//               {
//                 id: 'age',
//                 user: true,
//                 trigger: '7',
//                 validator: (value) => {
//                   if (isNaN(value)) {
//                     return 'value must be a number';
//                   } else if (value < 0) {
//                     return 'value must be positive';
//                   } else if (value > 120) {
//                     return `${value}? Come on!`;
//                   }

//                   return true;
//                 },
//               },
//               {
//                 id: '7',
//                 message: 'Great! Check out your summary',
//                 trigger: 'review',
//               },
//               {
//                 id: 'review',
//                 component: <Review />,
//                 asMessage: true,
//                 trigger: 'update',
//               },
//               {
//                 id: 'update',
//                 message: 'Would you like to update some field?',
//                 trigger: 'update-question',
//               },
//               {
//                 id: 'update-question',
//                 options: [
//                   { value: 'yes', label: 'Yes', trigger: 'update-yes' },
//                   { value: 'no', label: 'No', trigger: 'end-message' },
//                 ],
//               },
//               {
//                 id: 'update-yes',
//                 message: 'What field would you like to update?',
//                 trigger: 'update-fields',
//               },
//               {
//                 id: 'update-fields',
//                 options: [
//                   { value: 'name', label: 'Name', trigger: 'update-name' },
//                   { value: 'gender', label: 'Gender', trigger: 'update-gender' },
//                   { value: 'age', label: 'Age', trigger: 'update-age' },
//                 ],
//               },
//               {
//                 id: 'update-name',
//                 update: 'name',
//                 trigger: '7',
//               },
//               {
//                 id: 'update-gender',
//                 update: 'gender',
//                 trigger: '7',
//               },
//               {
//                 id: 'update-age',
//                 update: 'age',
//                 trigger: '7',
//               },
//               {
//                 id: 'end-message',
//                 message: 'Thanks! Your data was submitted successfully!',
//                 end: true,
//               },
//             ]}
//           />

//         </div>
//       </>
//     );
//   }
// }

// import "./ChatbotComp.css";
// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import ChatBot from "react-simple-chatbot";

// export const ChatbotComp = () => {
//   return (
//     <>
//       <div className="ChatbotComp">
//         <ChatBot
//           floating={true}
//           steps={[
//             {
//               id: "1",
//               message: "Choose language?",
//               trigger: "11",
//             },

//             {
//               id: "11",
//               options: [
//                 { value: 1, label: "English", trigger: "3" },
//                 { value: 2, label: "العربية", trigger: "100" },
//               ],
//             },

//             {
//               id: "3",
//               message: "Choose one of our Services",
//               trigger: "13",
//             },

//             {
//               id: "13",
//               options: [
//                 { value: 1, label: "Design", trigger: "4" },
//                 { value: 2, label: "Furniture", trigger: "5" },
//                 { value: 3, label: "Implementation", trigger: "6" },
//               ],
//             },

//             {
//               id: "4",
//               options: [
//                 { value: 1, label: "Classic", trigger: "7" },
//                 { value: 2, label: "Modern", trigger: "8" },
//               ],
//             },

//             {
//               id: "7",
//               message:
//                 "We have prices starting from 100LE and our prices are negotiable upon inspection, and there are also additional discounted offers if you will design and implement together.",
//               trigger: "3",
//             },

//             {
//               id: "8",
//               message:
//                 "We have prices starting from 70LE and pour rices are negotiable upon inspection, and there are also additional discounted offers if you will design and implement together.",
//               trigger: "3",
//             },

//             {
//               id: "5",
//               message:
//                 "Contact us immediately and do not feel hesitant.. We can manufacture the appropriate furniture for your taste at very appropriate costs, noting that the prices change according to the prices of wood and labor manufacturers.",
//               trigger: "3",
//             },

//             {
//               id: "6",
//               message:
//                 "We have prices starting from 12% and our prices are negotiable upon inspection, and there are also additional discounted offers if you will design and implement together.",
//               trigger: "3",
//             },

//             {
//               id: "100",
//               message: "اختر احدى خدماتنا",
//               trigger: "130",
//             },

//             {
//               id: "130",
//               options: [
//                 { value: 1, label: "التصميم", trigger: "40" },
//                 { value: 2, label: "صناعة الاثاث", trigger: "50" },
//                 { value: 3, label: "تنفيذ اعمال التشطيبات", trigger: "60" },
//               ],
//             },

//             {
//               id: "40",
//               options: [
//                 { value: 1, label: "كلاسيك", trigger: "70" },
//                 { value: 2, label: "مودرن", trigger: "80" },
//               ],
//             },

//             {
//               id: "70",
//               message:
//                 "لدينا باقات اسعار تبدا من 100 جنيه مصريا والاسعار متغيرة وقابلة للتفاوض حسب المكان بعد المعاينة . وايضا يوجد لدينا خصومات كبيرة اذا كنا سنقوم لك بالتصميم والتنفيذ معا .",
//               trigger: "30",
//             },

//             {
//               id: "80",
//               message:
//                 "لدينا باقات اسعار تبدا من 70 جنيه مصريا والاسعار متغيرة وقابلة للتفاوض حسب المكان بعد المعاينة . وايضا يوجد لدينا خصومات كبيرة اذا كنا سنقوم لك بالتصميم والتنفيذ معا .",
//               trigger: "30",
//             },

//             {
//               id: "50",
//               message:
//                 "تواصل معنا فى الحال ولا تتردد ابدا . سنقوم بصناعة الاثاث المناسب تماما لذوقك بتكاليف مناسبة جدا مع ملاحظة ان الاسعار متغيرة حسب سعر الخامات و مصنعيات العمالة .",
//               trigger: "30",
//             },

//             {
//               id: "60",
//               message:
//                 "لدينا باقات اسعار تبدا من 12% والاسعار متغيرة وقابلة للتفاوض حسب المكان بعد المعاينة . وايضا يوجد لدينا خصومات كبيرة اذا كنا سنقوم لك بالتصميم والتنفيذ معا .",
//               trigger: "30",
//             },
//           ]}
//         />
//       </div>
//     </>
//   );
// };

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import ChatBot from 'react-simple-chatbot';
// import "./ChatbotComp.css";

// class Review extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: '',
//       gender: '',
//       age: '',
//     };
//   }

//   componentWillMount() {
//     const { steps } = this.props;
//     const { name, gender, age } = steps;

//     this.setState({ name, gender, age });
//   }

//   render() {
//     const { name, gender, age } = this.state;
//     return (
//       <div style={{ width: '100%' }}>
//         <h3>Summary</h3>
//         <table>
//           <tbody>
//             <tr>
//               <td>Name</td>
//               <td>{name.value}</td>
//             </tr>
//             <tr>
//               <td>Gender</td>
//               <td>{gender.value}</td>
//             </tr>
//             <tr>
//               <td>Age</td>
//               <td>{age.value}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// Review.propTypes = {
//   steps: PropTypes.object,
// };

// Review.defaultProps = {
//   steps: undefined,
// };

// export class ChatbotComp extends Component {
//   render() {
//       const ShowBot = () => {
//     document.querySelector('.ChatbotComp').style.display = 'block'
//   }
//     return (
//       <>
//         <div className="ChatbotComp">

//           <ChatBot
//           floating = {true}
//             steps={[
//               {
//                 id: '1',
//                 message: 'What is your name?',
//                 trigger: 'name',
//               },
//               {
//                 id: 'name',
//                 user: true,
//                 trigger: '3',
//               },
//               {
//                 id: '3',
//                 message: 'Hi {previousValue}! What is your gender?',
//                 trigger: 'gender',
//               },
//               {
//                 id: 'gender',
//                 options: [
//                   { value: 'male', label: 'Male', trigger: '5' },
//                   { value: 'female', label: 'Female', trigger: '5' },
//                 ],
//               },
//               {
//                 id: '5',
//                 message: 'How old are you?',
//                 trigger: 'age',
//               },
//               {
//                 id: 'age',
//                 user: true,
//                 trigger: '7',
//                 validator: (value) => {
//                   if (isNaN(value)) {
//                     return 'value must be a number';
//                   } else if (value < 0) {
//                     return 'value must be positive';
//                   } else if (value > 120) {
//                     return `${value}? Come on!`;
//                   }

//                   return true;
//                 },
//               },
//               {
//                 id: '7',
//                 message: 'Great! Check out your summary',
//                 trigger: 'review',
//               },
//               {
//                 id: 'review',
//                 component: <Review />,
//                 asMessage: true,
//                 trigger: 'update',
//               },
//               {
//                 id: 'update',
//                 message: 'Would you like to update some field?',
//                 trigger: 'update-question',
//               },
//               {
//                 id: 'update-question',
//                 options: [
//                   { value: 'yes', label: 'Yes', trigger: 'update-yes' },
//                   { value: 'no', label: 'No', trigger: 'end-message' },
//                 ],
//               },
//               {
//                 id: 'update-yes',
//                 message: 'What field would you like to update?',
//                 trigger: 'update-fields',
//               },
//               {
//                 id: 'update-fields',
//                 options: [
//                   { value: 'name', label: 'Name', trigger: 'update-name' },
//                   { value: 'gender', label: 'Gender', trigger: 'update-gender' },
//                   { value: 'age', label: 'Age', trigger: 'update-age' },
//                 ],
//               },
//               {
//                 id: 'update-name',
//                 update: 'name',
//                 trigger: '7',
//               },
//               {
//                 id: 'update-gender',
//                 update: 'gender',
//                 trigger: '7',
//               },
//               {
//                 id: 'update-age',
//                 update: 'age',
//                 trigger: '7',
//               },
//               {
//                 id: 'end-message',
//                 message: 'Thanks! Your data was submitted successfully!',
//                 end: true,
//               },
//             ]}
//           />

//         </div>
//       </>
//     );
//   }
// }
