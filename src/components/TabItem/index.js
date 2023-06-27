import './index.css'

const TabItem = props => {
  const {details, changeTab, isActive} = props
  const {tabId, displayText} = details
  const changeTabId = () => {
    changeTab(tabId)
  }
  const isTrue = isActive ? 'is-tab-item' : 'tab-item'
  return (
    <li>
      <button
        type="button"
        className={`each-button ${isTrue}`}
        onClick={changeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
