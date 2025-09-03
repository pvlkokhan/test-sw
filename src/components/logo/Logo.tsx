function Logo() {
    return (
        <div className="logo">
            <img src={`${import.meta.env.BASE_URL}/logo.svg`}/>
        </div>
    )
}

export default Logo