const Tab = ({ title, onAction }) => {
  return (
    <div className="tab">
      <p className="tab-name" onClick={onAction}>{title}</p>
    </div>
  )
}

export default Tab
