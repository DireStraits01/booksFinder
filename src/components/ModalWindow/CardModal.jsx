import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalStyle.css';
function CardModal(props) {
  const book = props.book || {};
  const volumeInfo = book.volumeInfo || {};
  const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : '';
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h5 className="categories-book">{volumeInfo?.categories}</h5>
      </Modal.Header>
      <Modal.Body>
        <div className="modal_container">
          <div className="modal_image">
            <img
              src={volumeInfo.imageLinks?.thumbnail}
              alt={volumeInfo.title}
            />
          </div>

          <div className="modal_book-info">
            <h5 className="author-book">{authors}</h5>
            <h4 className="title-book">{volumeInfo?.title}</h4>

            <p className="description-book">{volumeInfo?.description}</p>
            <h4 className="publisher-book"> {volumeInfo?.publisher}</h4>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CardModal;
