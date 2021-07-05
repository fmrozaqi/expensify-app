import authReducers from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123xyz'
    };
    const state = authReducers({}, action);
    expect(state.uid).toEqual(action.uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducers({uid: '123xyz'}, action);
    expect(state).toEqual({});
});