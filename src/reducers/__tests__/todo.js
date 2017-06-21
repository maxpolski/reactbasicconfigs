import reducer from '../todo';

describe('Todo reducer', () => {
  it('tests are working', () => {
    expect(1 + 1).toBe(2);
  });

  it('should return initial state', () => {
    expect(
      reducer(undefined, { type: 'WHATEVER' }),
    ).toEqual([]);
  });

  it('should return proper state on GOT_INITIAL_DATA action', () => {
    const todosFromServer = [
      {
        test: 'test',
      }, {
        test: 'test1',
      }];
    expect(
      reducer(undefined, {
        type: 'GOT_INITIAL_DATA',
        payload: todosFromServer,
      }),
    ).toEqual(todosFromServer);
  });
  it('should change isCompleted state of todo by its index', () => {
    const initialState = [{
      id: 123,
      isCompleted: true,
      caption: 'test',
    }];

    expect(reducer(initialState, {
      type: 'TOGGLE_COMPLETION',
      payload: {
        id: 123,
        isCompleted: false,
        caption: 'test',
      },
    })).toEqual([{
      id: 123,
      isCompleted: false,
      caption: 'test',
    }]);
  });
});
