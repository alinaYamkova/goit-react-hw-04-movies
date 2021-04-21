import React, { Component } from "react";
import PropTypes from "prop-types";
import api from "../../ApiServise/Api";
import s from "../Cast/cast.module.css";
import img from '../../data/image.png'

class Cast extends Component {
  state = {
    casts: null,
  };

  async componentDidMount() {
    // console.log(this.props);
    const movieId  = this.props.match.params.movieId;
    const response = await api.getCast(movieId);
    console.log('casts: ', response)
    this.setState({ casts: response });
    this.scrollWindow();
  }

  scrollWindow = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'})
  };

  render() {
    const { casts } = this.state;
    return (
      <div className={s.castBox}>
        <h1 className={s.title}>Actors</h1>
        <ul className={s.castList}>
          {casts ? (
            casts.map(({ id, profile_path, name, character }) => (
              <li key={id} className={s.castItem}>
                <img
                  src={profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : img }
                  alt={ name }
                  className={s.castImage}
                />
                <p className={s.name}>{name}</p>
                <p className={s.character}>Character: {character || "unknown"}</p>
              </li>
            )) 
          ) : ( <p className={s.character}>We don't have cast for this movie.</p> )}
        </ul>
      </div>
    );
  }
}

export default Cast;





// class Cast extends Component {
//   state = {
//     actors: [],
//     imgBaseUrl: "https://image.tmdb.org/t/p/w500",
//   };

//   async componentDidMount() {
//     const { movieId } = this.props;
//     api.getActor(movieId).then((result) => {
//       console.dir(result)
//       // this.setState({ actors: result.cast });
//     });
//   }

//   render() {
//     const { actors, imgBaseUrl } = this.state;

//     return (
//       <>
//         <h1 className={s.title}>Actor</h1>
//         <ul className={s.gallery}>
//           {actors.map(({ id, profile_path, name }) => {
//             return profile_path !== null ? (
//               <li className={s.castItem} key={id}>
//                 <img
//                   loading="lazy"
//                   src={`${imgBaseUrl}${profile_path}`}
//                   alt={name}
//                   width="80"
//                 ></img>
//                 <p>{name}</p>
//               </li>
//             ) : (
//               <li key={id}>
//                 <p>{name}</p>
//               </li>
//             );
//           })}
//         </ul>
//       </>
//     );
//   }
// }

// export default Cast;

Cast.propTypes = {
  movieId: PropTypes.string,
};
