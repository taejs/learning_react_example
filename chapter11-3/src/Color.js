import {React} from 'react'
import { findById } from "./reducers";

const ColorDetails = ({title, color, history}) =>
<div className="color-details"
    style={{backgrondColor : color}}
    onCilck={() => history.goBack()}>
    <h1>{title}</h1>
    <h1>{color}</h1>
</div>

export const Color = connect(
    (state, props) => findById(state.colors, props.match.params.id)
)(ColorDetails)