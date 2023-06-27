import './index.css'

const ImageItem = props => {
  const {details, clickImageButton} = props
  const {id, thumbnailUrl} = details
  const clickImage = () => {
    clickImageButton(id)
  }
  return (
    <li>
      <button type="button" className="button-11" onClick={clickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="fruits-image" />
      </button>
    </li>
  )
}

export default ImageItem
