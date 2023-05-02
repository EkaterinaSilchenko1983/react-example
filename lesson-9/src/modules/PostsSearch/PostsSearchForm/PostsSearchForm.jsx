import { useState } from "react";
import initialState from "./initialstate";

const PostsSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    //дані з інпута
    //    console.log(target)
    setState((prevState) => {
      const { name, value, checked, type } = target;
      const newValue = type === "checkbox" ? checked : value;

      return { ...prevState, [name]: newValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ ...state });
    setState({ ...initialState }); // очищуєм форму
  };

  const { search } = state;
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        value={search}
        onChange={handleChange}
        placeholder="Search post"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PostsSearchForm;

// class PostsSearchForm extends Component {
//     state = {
//         search: ""
//     }

//     handleChange = ({ target }) => {
//         const { name, value, checked, type } = target;
//         const newValue = type === "checkbox" ? checked : value;
//         this.setState({
//             [name]: newValue
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         const {onSubmit} = this.props;
//         onSubmit({...this.state});
//         this.reset();
//     }

//     reset() {
//         this.setState({ search: "" })
//     }

//     render() {
//         const {search} = this.state;

//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input name="search" value={search} onChange={this.handleChange} placeholder="Search post" required />
//                 <button type="submit">Search</button>
//             </form>
//         )
//     }
// }

// export default PostsSearchForm;
