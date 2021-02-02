import * as tsx from 'vue-tsx-support';

import './style.css';
import HomePage from '../components/HomePage';
import Logo from '../assets/logo.svg';

export default tsx.component({
    name: 'App',

    render() {
        return (
            <div id="app">
                <img alt="CodeGrade Logo" src={Logo} />
                <HomePage msg="Wecome to CodeGrade!" />
            </div>
        );
    },
});
