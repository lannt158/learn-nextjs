'use client'

import Button from 'react-bootstrap/Button';
import * as React from 'react';
import MUIButton from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { increment, decrement, reset } from '@/modules/counter/reducer';
import { decrementTimeOut, incrementTimeOut } from '@/modules/counter';


export default function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h4 style={{ marginBottom: 16 }}>{count}</h4>
                <div>
                    <Button variant="success" onClick={() => dispatch(increment())}>
                        Increment
                    </Button>
                    <Button variant="success" className='ms-2' onClick={() => dispatch(decrement())}>
                        Decrement
                    </Button>
                </div>
                <div className='mt-3'>
                    <MUIButton variant="contained" onClick={() => dispatch(incrementTimeOut({ timeout: 2000 }))}>
                        Increment with 2000ms
                    </MUIButton>
                    <MUIButton variant="contained" className='ms-2' onClick={() => dispatch(decrementTimeOut({ timeout: 1000 }))}>
                        Decrement with 1000ms
                    </MUIButton>
                </div>

                <button className='mt-3' onClick={() => dispatch(reset())}>reset</button>
            </div>
        </main>
    );
}