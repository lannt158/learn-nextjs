'use client'

import Button from 'react-bootstrap/Button';
import * as React from 'react';
import MUIButton from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { decrement, increment, reset } from '@/redux/counter/counterSlice';


export default function Counter() {
    const count = useAppSelector((state) => state.counterReducer.value);
    const dispatch = useAppDispatch();

    return (
        <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h4 style={{ marginBottom: 16 }}>{count}</h4>
                <Button variant="success" onClick={() => dispatch(increment())}>
                    increment
                </Button>
                <MUIButton variant="contained" onClick={() => dispatch(decrement())}>
                    decrement
                </MUIButton>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>
        </main>
    );
}