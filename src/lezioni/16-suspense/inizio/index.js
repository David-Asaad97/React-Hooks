import React, { Suspense } from "react";
import Spinner from './components/Spinner'
// import Photos from "./../risultato/components/Photos";
// import Comments from "./../risultato/components/Comments";
const Photos = React.lazy(() => import("./../risultato/components/Photos"));
const Comments = React.lazy(() => import("./../risultato/components/Comments"));

const Component = () => {
    return (
        <div className='container '>
            <h2 className='text-center'>Suspense</h2>
            <Suspense
                fallback={
                    <div className="mt-5">
                        <Spinner />
                    </div>
                }>
                <Photos />

            </Suspense>

            <h2 className='text-center'>Suspense</h2>
            <Suspense
                fallback={
                    <div className="mt-5">
                        <Spinner />
                    </div>
                }>
                <Comments />
            </Suspense>

        </div>
    );
};

export default Component;
