import * as tsx from 'vue-tsx-support';
import { Maybe, Nothing } from 'purify-ts/Maybe';
import p from 'vue-strict-prop';

import './style.css';
import * as api from '@/api';
import { User } from '@/models/user';
import { VNode } from 'vue';

type NodeLike = VNode | NodeLike[];

export default tsx.component({
    name: 'hello-world',

    props: {
        msg: p(String).required,
    },

    data(): {
        username: string;
        password: string;
        user: Maybe<User>;
    } {
        return {
            username: '',
            password: '',
            user: Nothing,
        };
    },

    methods: {
        async login(): Promise<void> {
            // TODO (stretch): Error handling
            this.user = Maybe.of(await api.login.byUsername(this.username, this.password));
        },

        renderCoursesList(): NodeLike {
            return [];
        },

        renderBody(): NodeLike {
            return this.user.caseOf({
                Just: user => [
                    <p>
                        Welcome back {user.name}, your course are:
                    </p>,
                    this.renderCoursesList(),
                ],
                Nothing: () => [
                    <div>
                        <input v-model={this.username} />
                    </div>,

                    <div>
                        <input type="password" v-model={this.password} />
                    </div>,

                    <button onClick={this.login}>
                        submit
                    </button>,
                ],
            });
        }
    },

    render() {

        return (
            <div class="hello-world">
                <h1>{this.msg}</h1>
                <p>
                    Welcome user to to CodeGrade homepage!
                </p>

                {this.renderBody()}
            </div>
        );
    },
});
