import { applyMiddleware, combineReducers, createStore } from 'redux';
import { History } from 'history';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth, { authMiddlewares, AuthState } from './auth';
import userRepos, { UserReposState, userRepoMiddlewares } from './userRepos';
import searchedRepos, { searchedRepoMiddlewares } from './searchedRepos';

export interface AppState {
    auth: AuthState;
    userRepositories: UserReposState
}

const rootReducer = (history: History) => combineReducers(
    {
        router: connectRouter(history),
        auth,
        userRepos,
        searchedRepos
    }
);


export default (history: History) => {
    return createStore(
        rootReducer(history),
        undefined,
        composeWithDevTools(
            applyMiddleware(
                thunk,
                routerMiddleware(history),
                // @ts-ignoret
                ...authMiddlewares,
                ...userRepoMiddlewares,
                ...searchedRepoMiddlewares
            )
        )
    )
};