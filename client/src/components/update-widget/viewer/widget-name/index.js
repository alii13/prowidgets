import React, { Component } from 'react'
import styles from "./index.module.css"
import { connect } from "react-redux";
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { changeWidgetName} from "../../actions/slider"

 class index extends Component {

    onInputChange=(e)=>{
        this.props.changeWidgetName(e.target.value)
    }
    render() {
        return (
            <div className={styles.name__wrapper}>
            <input className={styles.name} value={this.props.widgetName} onChange={this.onInputChange} placeholder="Enter Carousel Name" />
        </div>
        )
    }
}

const mapStateToProps = state => {
	return {
	  canUndo: state.updateWidget.past.length > 0,
	  canRedo: state.updateWidget.future.length > 0,
	  widgetName:state.updateWidget.present.widgetName
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
	  onUndo: () => dispatch(UndoActionCreators.undo()),
	  onRedo: () => dispatch(UndoActionCreators.redo()),
	  changeWidgetName: (text) => dispatch(changeWidgetName(text)),
	}
  }

  
export default connect(mapStateToProps, mapDispatchToProps)(index);