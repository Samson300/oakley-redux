import { connect } from 'react-redux';
import MyComponent from '../components/MyComponent';
import {
    setActivityEat,
    setActivityNap,
    setActivityPlay,
    setName
} from "../actions-reducer";

const mapStateToProps = state => {
    return {
        activity: state.activity,
        name: state.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClickEat: () => {
            dispatch(setActivityEat());
        },
        handleClickNap: () => {
            dispatch(setActivityNap());
        },
        handleClickPlay: () => {
            dispatch(setActivityPlay());
        },
        setName: (Name) => {
            dispatch(setName(Name));
        }
    };
}

const makeSmartComponent = connect(
    mapStateToProps,
    mapDispatchToProps
);

const mySmartComponent = makeSmartComponent(MyComponent);

export default mySmartComponent;