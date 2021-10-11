import { createAction, props } from '@ngrx/store';

export const setUser = createAction('[User] Set', props<{user: string}>());
export const clearUser = createAction('[User] Clear');