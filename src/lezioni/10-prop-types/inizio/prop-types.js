import { datiIncompleti } from "../../../data";
import { PropTypes } from "prop-types";
const PropComponent = () => {
  return (
    <div>
      {datiIncompleti.map((el) => (
        <Prodotto key={el.id} {...el} />
      ))}
    </div>
  );
};

const Prodotto = ({ nome, prezzo, image }) => {
  const img = image && image.url;
  return (
    <article className="card shadow my-3 p-2">
      <div className="card-body">
        <img
          src={
            img ||
            "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000"
          }
          alt={
            nome
              ? img
                ? nome
                : "prodotto fuori servizzio"
              : "titolo non disponibile"
          }
          className="card-img-top"
        />
        <div className="card-text">
          <h4 className="card-title">
            {nome
              ? img
                ? nome
                : "prodotto fuori servizzio"
              : "titolo non disponibile"}
          </h4>
          <p className="card-subtitle">€ {prezzo || NaN}</p>
        </div>
      </div>
    </article>
  );
};

Prodotto.propTypes = {
  nome: PropTypes.string.isRequired,
  prezzo: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};
// Prodotto.defaultProps = {
//   nome: "nome non disponibile",
//   prezzo: NaN,
// };
export default PropComponent;
