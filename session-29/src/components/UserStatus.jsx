export default function UserStatus({isLoggedIn}){
    return(
        <>
            <p>{isLoggedIn? "Welcome back!" : "Please log in"}</p>
        </>
    )
}