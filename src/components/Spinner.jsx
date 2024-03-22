import loading from './loading.gif'

const Spinner = ()=> {
        return (
            <div className="flex justify-center items-center">
                <img className="my-3" src={loading} alt="loading" />
            </div>
        )
}

export default Spinner
