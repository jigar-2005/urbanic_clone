import Footer from '../Footer/Footer';
import './Personal.css'
import { Link } from "react-router-dom";

function Personal() {
    return (
        <div>
            <div className="pt-5">
                <div className="row px-4">
                    <div className="col-3">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAABKVBMVEUAAAD////+/v7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8FAQHq6url5eU/PDytrKzCwcFkYWG+vb12dHSYlpZcWVk5NjYzLy/5+fmAfn5DQEAfGxuBf38bFxcSDg4OCgqpqKh+fHwJBQXf39/19fXx8fHW1taxsLBubGzt7e3i4uKRj49TUFBLSEhIRUUrJycmIiLa2trNzc23trafnp6bmZmWlJR6eHhycHBqaGhhXl7R0dHJyMiLiYmJh4eFg4NoZWXT09NWU1NPTEyioaHc3Nyko6Ps7Ozr4OGdAAAAJXRSTlMAA/7F7Dv27+bSjYljUEotHBL539vTzsqqpqCTaWFZTkgVDLm4R56G3wAABdRJREFUeNq80gmygyAURNGngKAoYOYYM5hK73+LfwGJfkTgrKCrblOYXtz15cPqPd/t+L5mn4u+i54y6bsb4/iJs1uXesfbNKcSi8pTY96USPG6VvBSXV8FxWcbhRVUYymu7ozVzl3EAo8jghwfRZwB7QHBDm2EEaLGJrWgbaYBmw3TlgajRARyDK7hGCJhjoIYjmi4CYmgEZUutkbIH8MqRKcsrSAkEpCCvD0rJFE9yVNbIpGy9VyAhFqvCiUSKj1aiApJVYL+YSUSk5YWOYXklKMFBUMGrKB5GllommWQiaEZjiMT7gKOkOcOIzIa6YdJIiM50bcBWQ30RSCzP2LrRSdxIAzD8FDRiMY1eDZGYzTfV0DxAAsLKCAqAkblILK6uIf7v4r9ww6FAbTJJjpPQjIt0/DStJ1OqxGBED5ZKPCfK/THrduBFXy6FfM07MCCHSNhFRasqiELsGJBDazDinXlWYQli6pvDpbMKS0wC0tmAzphF9bs6oRNWLOpevZmYM3Mnn5jtOiLvfvBvCfWYNGaEmEHFjlhW+uDuU5swaotSZiCVVOSEIRVQaXCEG65UCi4SUAU3ULkGveNb1r9FT1Osg8j4mfoKzXliBK0h+fjjuyry76bB/TdP1a67Xa3VUZPWL+8n5J0oaXjAGIk224hViUrLkS5TjJ9dFXLZlN1DItmBlVfSSa8zdQxxAHJQ2h3VZ5fQLitq176tNp+J+EI4oW8TUJESEYBuBWpcuApk5dGAltvJ8RyPIMWaUFsq3m/BFTJ8+EEOFHyBR5pPBkk5Enmv7+VEMvLyONCzKsN34RL8tZIwD2Zc9CXkK0LL+FngjK/ODmhlCNLMG2ofd+EMsmikeDkyA60DsVvL+HkNU/yanJCijzFiH015ZOg/7ORgAwZh3aUJVkbJOCZIj6WoAeN8QdDyDehqX9ZJ+hRBP846UaezLuDBCdKMn0xIeFQH2cIqWW/hOsM+WAmPJK/oB1kixWSN4ME/MmRfJqQkCYzGLWsgj4Jd/JVC0ZCncwUoHWfelNPhxJwTHE5nqDnmYJq6Z2E6I9WLcfEGbyExEG8WSVTXkEyG5cPyTsvQdQole5ogqMvGtPSX2bsbTlRIAgDcBVvsA+Qu/QvuqUFWCacFAWDrhijqwTFw272/R9iBVqZgVRyy9x4wBq/mp6enpkvCbuJMwOipCREYRhudVjaLbV8Uyli/CwS1Aw1+4wwqBO+DYQDWJMyEPy/sHjNP2+zIpHhRAJ9FJlaD4RRD8T30zEFLiKBO7Xyn4/t1zwrACRMYBoA66VCWABWfTpyUrZFgikRPBsYVwik8cO36N/02nYAAonQMrPAVwhbAMtaUvLSFAsEZXgSCXQBflYJa347mLtZy/o2FZFAPgAMZcIJwKG+ND3mr3uBkNh9idADOlXCqgi+ir9EPMRYCQRehyAQePAWVcIjl6nlsByieUwSYQ1sRAKTz0QU6vw5BRDLhHFUJ7SeeEQ5o4syxff/wb3U/DFbMuGdOxAIil70bmy4sxEA25MI1K0T6NUSVwanKNYPbG4jmmYwd9ghmUBt2KpMOAC6QjTh0sDz2ZEJFNQJ9B7BJW6nvLeH+62rp8F0178Xpk9VwvIJZ0UgqDEweCEid063tgFwqRC8RZ1A4549yxK53+2t/WLj9qPcgIVHrdfxWPtsGMaRK/I0/LUbqW/Xb9pBEFwM/fiRj+N8O7pl0eb6UHdayU7rloYkX9s7++uz2FHvCH+fpulh1eftaxM28U04yjTgQNeAY20DDvcNuOL4z6wdCAAAAAAI8rdOI417CD1B7gqiX5A+hwAcZPAAAwYSCWBo4LEACQcqDcA4YPNhHggWCs3cMQ0AAAzDMDDlz3Hn1LuPecQRQhIhpwGiIiGtAgIzIbMTYkMhuQTCUyG/FSJkIcUWgnQhyxdwgkA0BKgicB0BLQl0iwBsAuMTMCNBOgnYKvBeAjkb1JsA7wT7N+YHvYDILyAyLCAOaT6suv9J5y4AAAAASUVORK5CYII=" alt="#" width="91px" height="91px" />
                    </div>
                    <div className="col-9">
                        <Link to="/login">
                            <button class="btn text-light px-4" type="submit" style={{ marginTop: "25px", background: "#333333", fontSize: "18px" }}><b>Log In/Sign Up</b></button>
                        </Link>
                    </div>
                    <div className="col-4 text-center">
                        <h5><span style={{ fontSize: "30px" }}>0</span><br />Coupons</h5>
                    </div>
                    <div className="col-4 text-center">
                        <h5><span style={{ fontSize: "30px" }}>₹0</span><br />Rewards</h5>
                    </div>
                    <div className="col-4 text-center">
                        <h5><span style={{ fontSize: "30px" }}>0</span><br />Wishlist</h5>
                    </div>
                </div>
                <ul class="list-group list-group-flush mt-5">
                    <li class="list-group-item py-3" style={{ fontSize: "22px" }}>
                        <div className="row">
                            <div className="col-1 text-center">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAA/FBMVEWqqqqAgIBVVVVgYGBVVVVGRkZOTk5JSUlERERAQEA8PDw9PT1AQEA7Ozs8PDw3Nzc8PDw5OTk2NjY5OTk4ODg1NTU5OTk2NjY2NjY4ODg3Nzc2NjY1NTU2NjY0NDQ3Nzc1NTU1NTU3Nzc2NjY1NTU1NTU2NjYzMzMzMzM0NDQ0NDQzMzM0NDQzMzMzMzM0NDQzMzMzMzMzMzM0NDQ0NDQ0NDQzMzMzMzM0NDQ0NDQ0NDQzMzM0NDQzMzMzMzM0NDQ0NDQzMzM0NDQ0NDQzMzM0NDQ0NDQzMzMzMzM0NDQzMzM0NDQ0NDQzMzMzMzMzMzMzMzMzMzMzMzMzMzNv+3dZAAAAU3RSTlMDBAYICQsNDg8QERUYHiIlJig0Ojs+P0JLTlRVVlpdXWBqa3JzfoCBg4SFh4mNkJmhpqurtre4ub/AwczP0dLT2d/i4+bn6Onq7O/x8vP1+Pn9/saPSn8AAAJSSURBVGje7ZddU9pAFIZXI0QUBEwRxLYCAtJatYAirVZoMbRVYyjP//8vvaDTD4QFNjkzvch7ueedZzJns2ffVSpSpEi/lK42u33P63eb1XS45GSjx1/qNZKhoe26x5S8uh0OuzhkhobFMNj1MQCjTiWfte1svtIZATCuB0bH2gC45cSftUTZBaAVCwhvA/i1+L+r8ZoP0ArYEwDXeV5wXIBAnSmOgU+pWaXULTAOsKv2EHBTs4spFxjagZriO/Oqjh+kMUkPqM2v1wDP9Ky+Adz4/HrcBRqG8B5Q1hnKQM9wDgKjhM6RGAFmM7IKdPSWDlA1gjeBit5SAZpG8C6Q11vyQNcI3geyeksW6BvBPWDBAbQBzwj+CGzqLZvA4//XFtENFf0VRQ+R6PEXHVyqITlyRS8L0WtO9oKeRItbmWghG4qUagnGORVrCQZR0QgtHP7VxuubH0LPlt3z+2dfHdKDK3c59cXhPRUzv9FPVyclZ2fbmnYUBoOCEdo69ifkr2d71hzPAAZGd8X1BP1xf32+CcCAffAAQDendZnBj8YAd68W2Izg7wC42FIC8An7dE0JwI8A/NISztXhB2Pg2wslAU8/AP5S7JXh1jVASYnAjwFOlQg84wMXazLwS+BuS4nAcwC6c1kYoJF+RnYWxXktWz8jdwFyQvBz4IO2b+Zt2bgH9lfY/lU29CUwXBeCvwfOlBD8C7AnBM8AT5YQ/BC4UkLwt8CJFLy9/KxdHX4DOFLwz8COFPw7sC0FHwGWFHx1mQbRpWQcoSNFihQpgH4CK8oUDMJxgTkAAAAASUVORK5CYII=" alt="#" width="30px" />
                            </div>
                            <div className="col-10 text-danger">
                                REFER YOUR FRIEND & EARN ₹200
                            </div>
                            <div className="col-1 text-center">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item py-3" style={{ fontSize: "22px" }}>
                        <div className="row">
                            <div className="col-1 text-center">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAYAAADj79JYAAAD7klEQVR4Xu2dsW4TQRCGxz64ygV0FBGijmQET4CEhITCA1BQ0kQuQFas7DNcZGRBYaWhpCA9ERISEk8AIlJqhFLQQeHK4DNy5IsukRPP7Iw3u/C79cw/s9+Ox3e7p9vG3t5eRvgEI9AA8GCsjwMFB97v9x+WZbk7C95sNjd7vd57yZC1/lUsKx1J7pcCfGdn59t0Ol07Dt5oHG1vb9+SJK31r2JZ6UhyvxTgRVH8qSfpnLsiSVrrX8Wy0pHkDuA1WtKJl4Ku7IP3cG1laf1R4Wgpvj8Wnp+2QrX+qHBUOK9Sz1oNBoP18Xj8lIgeENFNImr5KUXjNSKi70T0Ic/z191u99AiM/Wf5v7+/tWDg4MXRLQ5u5exSCpCjZKIdtvt9tbGxsZvTX4q4HPY74joviaJhHw/ttvtRxroKuBFUbwiok5CwCxSHTrnnvkKeQOf9+wv9TYyu1VvNpsuy7JP3W73x6KktFcZWn/uVcpgMLgxmUzulWVZVEsRc98yz/M7vj3dG3hRFLO+/fzkDqrROGq1Wnc7nc7Pi2ZfC0zrzwVe2Q2Hw+uj0ejzGegvnXNbPlWuAf6ViNaroFmWPen1em+XJaFdNNL6V/lJdPr9/uPJZPKmNrZD59ztZWNd9L0G+K/6pV+e52vntZF6YO2yqNa/ykWiM2sv4/H4qDaOkXPuWmjgqlU/n2Qv08eqlWkqHMA9KgDAmdBQ4UxQVmYAbkWSqQPgTFBWZgBuRZKpA+BMUFZmAG5FkqkD4ExQVmbJAK9uoc8s/lhxMNOZr3Se+yRYMsDri0RmdFYkdNGTYAC+Auj/BHC0lNOVgbUU5i8lmZbCHE/0ZgAeeIoAHMBlz3kH5qUOhwpXI5QJALiMl9oawNUIZQIALuOltgZwNUKZAIDLeKmtAVyNUCYA4DJeamsAVyOUCQC4jJfaGsDVCGUCyQCPZQNi2Z7lMvzJAI9pT9Pn7RXVRAD4spJc8P1/ARwt5fTMY0+T+UtJpqUwxxO9GYAHniIAB3DsaXJqAH+aHEpEhJbCBGVlBuBWJJk6AM4EZWUG4FYkmToAzgRlZQbgViSZOgDOBGVlBuBWJJk6AM4EZWUG4FYkmTrJAF/VBoR2j5LJ+cQsGeCr3NPUbJkBuJSA55EGHmGOXZKpcLSU01OM5VlmySdT4czxRG8G4IGnCMABHHuanBrAnyaHUkqXhczxRG+GHh54imIA7vU668CcTMLF8jprrxe2mxAILBLLC9u9jiQIzEodLpojCXwP3VATCCQQ3aEb8xU0HCsjLADv6/BZHBycJKRtcSYyjgaTQVdVeD0UDr/jgTcDzgsHKwAPXAMADuCBCQQO9xd1iq719SFKzAAAAABJRU5ErkJggg==" alt="#" width="30px" />
                            </div>
                            <div className="col-10">
                                Orders
                            </div>
                            <div className="col-1 text-center">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item py-3" style={{ fontSize: "22px" }}>
                        <div className="row">
                            <div className="col-1 text-center">
                                <img src="data:image/png;base64,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" alt="#" width="30px" />
                            </div>
                            <div className="col-10">
                                Refunds/Return
                            </div>
                            <div className="col-1 text-center">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item py-3" style={{ fontSize: "22px" }}>
                        <div className="row">
                            <div className="col-1 text-center">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAAXNSR0IArs4c6QAAAKVQTFRF////v7+/bW1tgICAXV1dUFBQTU1NRkZGQkJCREREQ0NDQ0NDPj4+QEBAPT09PT09OTk5Ojo6NjY2Nzc3NjY2NjY2NTU1NjY2NTU1NTU1NTU1NjY2NTU1NTU1NTU1NTU1NDQ0NDQ0NDQ0MzMzNDQ0MzMzMzMzMzMzMzMzNDQ0MzMzMzMzNDQ0MzMzNDQ0NDQ0MzMzNDQ0MzMzNDQ0MzMzMzMzMzMz2GKqMwAAADZ0Uk5TAwQHCAsQFBYbHiImLTA7P0dUWmJxe3yAhpCRk5Wgp6itsru9xsfR1dvj5Obo6+3x8/b6+/3+cu1m7gAAAV1JREFUaN7tmN1SgzAQRqOtLdUqilZFsYpVEfEHNT3v/2heSBWLIBDitDN7LneHcxE2kHxKCYIg/ANjP0ppRRr540p1L9AYoINehXuGIbNye4AxQel6ayD2nHZvy/FiQJetuw/Eg/bDMIgBv6QZAZ7JqHlAVNJLAcdE7gBpSQ/AbJdUGEQucpGLfM3lbpgkoZvv/12pK5/MAfRENanUlLvZGUO7TSo15eHidx42qdSUJ4sHkyaVVZBbXRarL1Qd6+XBq1FZiU0kHy6Ri1zkIl9budVLrtXrudVgwWokshzmJNPRd2/78tEozCnGUM9f9v0X0xiqGKBNs8bhm3GAVoz+slPgSRfR3+9bYvMCQB91GmBm8q1rgNcDZUE+ugN42lMW5LsPAPc7yoL8cwRvh8qG/B3gqq+syAHONpQteccj+EPe9Qjm5Z2PYE7e/QgumHMztOVWp+d9JQiC0IIP8sb5BxOASmsAAAAASUVORK5CYII=" alt="#" width="30px" />
                            </div>
                            <div className="col-10">
                                My Reviews
                            </div>
                            <div className="col-1 text-center">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item py-3" style={{ fontSize: "22px" }}>
                        <div className="row">
                            <div className="col-1 text-center">
                                <img src="data:image/png;base64,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" alt="#" width="30px" />
                            </div>
                            <div className="col-10">
                                FAQs
                            </div>
                            <div className="col-1 text-center">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item py-3" style={{ fontSize: "22px" }}>
                        <div className="row">
                            <div className="col-1 text-center">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAYAAADj79JYAAAMyUlEQVR4Xu2df3QUxR3AZ3b3LrnISTBASMRS9IkVRMGofc/X1tqitSgVqzy1QjVFiQ0kJHd7O9jqq75ay/66xASvokK0WK1GC1ZLbZtXn/3hq20RlBYVnyAVBQMxxcQcudud6Zv0krdZLtm93b3jOG/ey1/3nZnv97OT78585zuz8Omnn2ZBseSMACwCzxnroY6KwHPLuwg8x7yLwIvAc00gx/3lpQ/v7Oxk9+/fP0/TtNmEkLMBAF8ghMyAEAYJIScDAOgfLZ9ACD8hhPRBCPcBAN6CEL7Jcdyu6dOn71iyZImeY56W3eUN8La2thmJRGIhxngBAODSFFhLA8YSoA8CAPASwzBdfr9/a2NjI30gx70cV+CbNm0qOXjw4DUY4+9RyHTWlCUiJAV/47Rp0zYvW7ZsMEv9WDZ7XIDHYrHgwMBAk67rjQCASZZaeivQy7JsW1lZWWt9fX2ft01bt5ZT4I8//njZgQMHVmOMQ1agIYQHAQCvAADeZBhmF8dx7xBCeqmrmDVrFnUXYPfu3SdT1wMhnKRp2pkY49kAAOrzLyaETLMwv5dhmGhVVdX9S5cuHbBG5Y1EzoArinKFrusPAABmjON3X4EQbvb5fF1NTU073ZjY2to6N5lMLiCEXEMIuXictvaxLLuS5/kX3fRnt27Wgbe2tlYMDg62AgBuHEOpwwCAxziO2xgOh9+2q3gmcqqqnqVpGn1P3AwAmDxG3SdLSkqampqaejJpO1PZrAKPRqMXaJrWSQg5zawYhPBjhmHUioqKdbW1tZ9mqrgT+Y6OjpN6enpWYYzDhJBT0uj0PsdxS0Kh0D+dtG+nTtaAq6q6XNO0NgBAiVERCKEGAGiZMGHCfcfjpUV1oS/t/v7+HwAAmgkhnAnUIMdxjeFweIMdgJnKZAW4KIoSAIC+GEcVCOF2lmVvC4fDOzJVNBvyqqrO03X9YULI/DTtRxFCgtf9eg5ckqQHCCF1aWDLM2fOvDPfVn90Vbt37957CSGRNDqvFwRhpZfQPQUuSVIHIWSZScF+hmGWRyKRZ71U3Ou2ZFm+FmNM3cgEkwvcJAhCrVf9eQY8nRuBEH7k9/uvcDvF88pYq3boVDKRSLxICKk0yXrmXjwBLstyHcaYzrGN5QOfz3dZKBTabWVoPv0ejUZnJZPJPwAATjXqxTDMykgkst6trq6By7J8GSHkBUKIcW/0g5KSkkuamprec6vg8ajf2tr6+cHBwZeN0CGEOoTwqkgkQh+G4+IK+Pr16ycfOXLkddO/YL/f7/9Kc3PzG461yoOKLS0t5yYSiT8ZfTp1kRMnTjyvrq6OLtYcFVfARVHcAgC4arhnOgoYhlnM8/xvHWmTZ5UURfkmxniL6b/3BYTQYqeqOgauKMptuq7/zOTn7opEIj91qkw+1pNl+Q6M8Y+NurEs+32e5x92oq8j4O3t7acMDAzQuIcxtPqXmpqary1YsAA7USRf63R1dTHbtm37IwDgSwYde8vKys5qaGj4OFO9HQEXRXEdAOB2gyv5pLS0dH6+7KpkCsFKnu5GHT16dLtpF+pBhNAqq7rm3zMGrijKORjjbUa/xjAMH4lEaESwYIssy00YY8X0vqrhef5fmRidMXBJkp4ihFxr6Hj3lClTzq2traVBqYItHR0d3KFDh94ghMwy2P6sIAjXZ2J0RsDb2trOiMfjbwIAmOFOfD7f1aFQ6DeZdHqiykaj0SuTyeRzBv1xIBA4u7Gx8V27NmUE3Oy7AQCvIYQusttZIciJovh3AMD5Blsy8uW2gW/YsGFiT0/PfkJIYLgzlmVv4nn+qUIAadcGRVGu13X9Fwa3Eq+oqJi+fPnyI3basA1cUZRbdF1/xNDovtNPP31WvoVb7RjtRoaGc/fs2UPjQyN7syzL3srz/KN22rUNXJIkGkWjSTpDhWXZu3mev9dOJ4UmoyjKnbqu320Y5V2CIFxhx05bwNvb26fG4/H3jVNBv99/dnNz8zt2Oik0mZaWljMTiQSdPAwVGtIIBAKnNTQ0dFvZagu4oii1dCvK0NhrDMNIGOOrIYQ1hJDqVMcfEkK2MQzz3OTJk7ecqFNFOgU8fPjw4vHswxjT7beRlyfdOuR5vsMT4JIkPUoIWWpojC5pj9n1NnX2LsdxKBwO0wDXCVNUVV2saZoIADjDQulRDCCEtnaGbI1wURTpPHPMBB4LxZRFixbdMXv2bJrfl7dl165d8Pnnn6eBN96hkvsQQlYPyTohPxqNnpZMJvc6VGK4moIQWuOyjaxWF0VxrQvYQ7r5fL6ZoVDo/fEUtRzhiqJ8S9f1X6VphI7YDSzLbqyoqPg3/b2np2eOrus0w2m5OROW47jr8tW9pNzIMyYbM7KP1mVZ9ts8z//aLXBe13X69I3lgM/n+24oFHopXePRaPTSZDL5cwBAleH3d6dOnTon316k9AXZ3d1NB4zRHTixjwJfw/P8SIArHRvLEb527doXIYQj828AAPH5fJePBXu4kxT03xtHOsMwN0QiEfNIyqqrsGpcluXrMMa/NMg5to8Q0rVmzZpx5+OWwEVR/AAAYEwb+B1C6EorQ+jvoig+CAC41SD7JELInLdip6msyYiiuMmUaPoIQmgk1j9ex6Io0qDdNwwyHyGERu32m+vbAU4TLY35gTchhGzFTxRFuUjXdZrjPVQghLsFQaA53HlTJEnaZQy5six7Mc/zNEBlWURRpKHZkbgKAGAQIXTSeBXtAE8Yw7Ecx82xm1ZMs1W7u7uNQZ1+hFC5pSU5FBBF8b/GnfmpU6dOtJvNm0qDHpowpApGCPndAh+1sRAMBqfU19f32mUiiuKo+gghc7aq3aayIudGv1gsNqmvr++QUTEr++yM8FHA5s6dG1i4cGHSrvVuDLLbhxs5N/pt3brVt3PnznhWgVs9QbPxbgxyA9JuXTf6paaUR4vA7dL+/0zKsctra2s7OR6Pj0qVsBqQGbsUqwY/SyM8FotV9fX1jVrKW/EpAncxwlVVnaNp2utFl5IjlyLLMj2qPip2UhzhFvDd+HBVVW/XNI1moY0UL4A7XhgU+sJHkqQYIWSFgbf7laabpe9nYGlPE1qNUcYPEUKfc7vSdBPcKdjgVSqD+CNT3H8zQmiJK+Behi8LKTyrKMpduq7/yAjXjn2W00IPA/QFtQGRSCS2QAhHIoOEkP7KysrJVhsslsDpE/RiC6rQt9gghO2CIDRbzUhtAaeNuNxkLfRNZFJeXl5l57CVbeAu0ggKPk0CQvhXQRAusRrd9HfbwIcbyyBRptATgUb4chxXZ/f2iYyB017spIIVaqobvbqPEHKBYTR/OmnSpFNXrFjRn5URbqfRQpYxLwQhhBsFQTCuNsc139EIL2Sg49mmKMoiXdc3G2RwaWnpuatXr37LLpMicJukYrFYoL+/nx6qmmmo0okQGusur7QtF4HbBJ7mehLMsuz5WT82aFO/ghJLXdX0qunMfTtCyHKhYwZRHOEWQyN19PtvxuR7COHe6urq85xcMFkEbgFcluUfYozvMYpxHHd5OBym5+8zLkXg4yBTVfVGTdNoFrDxEuINCKFjLlGzS74IfAxSqqp+XdO0F2ievUHkw0AgcE5jY+PQ3bdOShF4Gmr0NqBkMvkyISRo+DnJcdyVTl3JcDtF4CbgLS0tM1NXLxkPE2CO424Kh8OdTka1sU4RuIGGLMtfTSXnj7oQmOO4VeFwmG4Xui55D5xOy3bs2NGAMV5KCDkLAFBmYfUAhPBthmE2zZs3b53dG4pkWV5JCFHNd9GyLHsPz/OjrmByQz2vgdObeOLx+BMAgC86NPLVQCDwnfFuKurs7PTv2bMnBgC45ZhFCoQPCIKw2mHfaavlLfDUguPPLmAPG/xqTU3Nl9ONdFVVL9R1vd0UbqX16Am2nyCERs7TewU9b4ErirJa13XVC0NZlg3xPE+v1h4qqbOn9wEAbkjzoQ/6qYKbI5HIVi/6Pua/Jl8/fidJ0j9M10w/EwwGG+rr60edODAbFIvFpvT19bUDAK4bmYpBuF0QhAsfeuihCb29vQhCSO8NL03jQrb7/f4l2bxRNG9HuCiKdHEx8oIsLy+fZmeTlkJMQT9gAEpPKdC7camfHuuTBI9WV1evzPYnZ04Y4MFgsMpqdA8DTgOc+uSxvhH0HsdxfK5OSectcC9dSjpfDCHso5+VqayslLI9qk+IhY+XL81RBkPYwzBMezAYXFdXV0czg3Na8naEezgtHJrmQQhfhhA+VlVV9ayTOLZXTyVvgVMD3S586JetOI5rKy0tfWzVqlX/8Qqam3byGjg1zOnSHkL4xPz58++3u7R3AzGTunkPPBNjTgTZIvAcP6Ui8CLwHBPIcXfFEV4EnmMCOe7ufxuw0RNdM3UXAAAAAElFTkSuQmCC" alt="#" width="30px" />
                            </div>
                            <div className="col-10">
                                Customer Services
                            </div>
                            <div className="col-1 text-center">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item py-3" style={{ fontSize: "22px" }}>
                        <div className="row">
                            <div className="col-1 text-center">
                                <img src="data:image/png;base64,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" alt="#" width="30px" />
                            </div>
                            <div className="col-10">
                                Settings
                            </div>
                            <div className="col-1 text-center">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item py-3" style={{ fontSize: "22px" }}>
                        <div className="row">
                            <div className="col-1 text-center">
                                <img src="data:image/png;base64,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" alt="#" width="30px" />
                            </div>
                            <div className="col-9">
                                Settings
                            </div>
                            <div className="col-2 text-center">
                                More
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item py-3" style={{ fontSize: "22px" }}>
                        <div className="row">
                            <div className="col-1 text-center">
                            </div>
                            <div className="col-10">
                                Return Policy
                            </div>
                            <div className="col-1 text-center">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item py-3" style={{ fontSize: "22px" }}>
                        <div className="row">
                            <div className="col-1 text-center">
                            </div>
                            <div className="col-10">
                                Shipping & Delivery
                            </div>
                            <div className="col-1 text-center">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item py-3" style={{ fontSize: "22px" }}>
                        <div className="row">
                            <div className="col-1 text-center">
                            </div>
                            <div className="col-10">
                                About Urbanic
                            </div>
                            <div className="col-1 text-center">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <Footer currentPage="Personal" />
        </div>
    );
}
export default Personal;



