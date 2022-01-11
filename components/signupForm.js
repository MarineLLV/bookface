import classes from './signupForm.module.css';

function SignupForm() {



    return (
        <section>
            <div className={classes.color}></div>
            <div className={classes.color}></div>
            <div className={classes.color}></div>
            <div className={classes.box}>
                <div className={classes.square} style="--i:0;"></div>
                <div className={classes.square} style="--i:1;"></div>
                <div className={classes.square} style="--i:2;"></div>
                <div className={classes.square} style="--i:3;"></div>
                <div className={classes.square} style="--i:4;"></div>
                <div className={classes.container}>
                    <form className={classes.form} method="post">
                        <h2>Sign in</h2>
                        <div>
                            <div className={classes.inputBox}>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className={classes.inputBox}>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className={classes.inputBox}>
                                <input type="Password" placeholder="Password" />
                            </div>
                            <div className={classes.inputBox}>
                                <input type="Password" placeholder="Confirm Password" />
                            </div>
                            <div className={classes.inputBox}>
                                <input type="text" placeholder="First name" />
                            </div>
                            <div className={classes.inputBox}>
                                <input type="text" placeholder="Last name" />
                            </div>
                            <div className={classes.inputBox}>
                                <button type="submit" value="Submit">Create my account</button>
                            </div>
                            <p className={classes.forget}>Already have an account? <a href="./login.html">Login Here</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}


export default SignupForm;