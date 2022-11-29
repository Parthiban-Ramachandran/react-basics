import { Link, Outlet } from 'react-router-dom';
import '../styles/style.css'

function HomePage() {

    return (
        <>
            <div className="container my-5">
                <div className="row my-5">
                    <h1 className='text-center'>
                        React Basics
                    </h1>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-2">
                        <Link className='nav-buttons' to={'/counter'}>
                            Counter
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link className='nav-buttons' to={'/search_filter'}>
                            Search Filter
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link className='nav-buttons' to={'/list_data'}>
                            List Data
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link className='nav-buttons' to={'/api_data'}>
                            API data
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link className='nav-buttons' to={'/form'}>
                            Form
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link className='nav-buttons' to={'/data_table'}>
                            Data Table
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default HomePage;