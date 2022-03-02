import './Footer.css'
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className='footer row m-0' style={{ height: "61px", paddingTop: "7px" }}>
            <Link to="/" className="col text-center" style={{ textDecoration: "none", color: "black" }}>
                {(props.currentPage === 'Homepage') ?
                    <>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAq1BMVEUAAACAAACqAADMAAC/AACqAAC5AACxAAC7AACvEBC/DQ2/CwvBCQm2Dw+8DQ27DAy+DAy4Cgq/Dg6+DQ27DAy8Cwu9DQ28DQ28DAy8DAy7Cwu7Cwu8DAy7DQ28DAy7DAy8DAy8DAy7DAy8DQ27DAy7DAy7Cwu7DAy7DAy8DAy8Cwu7DAy7DAy7DAy8DAy6DAy7DAy7Cwu7Cwu7Cwu7DAy7DAy7DAy8DAy7DAzmG/rsAAAAOHRSTlMAAgMFCAkLDQ8QFBgdIyYpKzI4O0BIUWNmanB4gouVl6eqrbO7w8rR09nf5Ont7vHx9PX4+vz9/sm40PgAAADsSURBVDjL5dXHDoJAFIVhrKgoYge72DsK6v/+T+bCGAdkkJWx3N098yXTMhlF+cfKWlY2rq0sYVmJZ9sugNuOQQtjYL8HxoVXtr4GZqXSDFjXI2mye4JzL6Uoqd4ZTt2k3BanwKZxaxobYFqU2eYWmGj3VpsA22YoTfcv4HUSjyTR8eDSTz/b8hxYVf1hdQXMy0HbOgCjXDDOj4BDy5epQ+Bohq3OPAJDVUhsYGGEb9tYALYQuDDIyA4pMwBX6IGou/IPfw5+Ue/C33h0v40dqMltDZzAs4os8Vnpu2i708WZdNuRU8fW/+QXuwKs71dSk7oNpAAAAABJRU5ErkJggg==" alt="#" width="30" height="30" />
                        <h6 style={{ color: "#BB0C0C" }}>Discover</h6>
                    </>
                    :
                    <>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAq1BMVEUAAAAAAAAAAAAzMzMgICA5OTkuLi4nJyczMzMwMDAzMzM1NTU1NTUzMzM2NjYyMjI1NTUzMzMyMjI0NDQ0NDQyMjIyMjI0NDQyMjIzMzMyMjIzMzMzMzMzMzMzMzMzMzMyMjIzMzMyMjI0NDQzMzMyMjIzMzMyMjIzMzMzMzMzMzMyMjIyMjIyMjIzMzMyMjIzMzMzMzMzMzMyMjIzMzMzMzMyMjIzMzMzMzNrW5JJAAAAOHRSTlMAAgMFCAkLDQ8QFBgdIyYpKzI4O0BIUWNmanB4gouVl6eqra2zu8PK0dPZ3+Tp7e7x9PX4+vz9/qkaNK8AAADsSURBVDjL5dXHEoIwFIVhbNjB3lEUe41i+d//yVw4jkEJsHIs2d2TbybJvYto2j8uvd3Wo9ryEpblaLbjAridCDQ3BoQAxrkwW1sDs2JxBqxrgTTeO8HZSmhawjrDqRdX28IU2NRvRX0DTAsq29gCk/y9zE+AbcOXJvsXOHZjjyTWPcKln3y15hxYVbxhZQXMzWfb3APDzHOcHQL7pidL28Ch5Xe71gGw01IyAhYl/2eXFsBIClwYpFRNSg3AlWogaFbe7c/BIetd+Btb99tYQFVtqyCk0gmbtiNhYxdsd4Z8kuEINRWO8Se/2BU9T1dwbUqILAAAAABJRU5ErkJggg==" alt="#" width="30" height="30" />
                        <h6>Discover</h6>
                    </>
                }
            </Link>
            <Link to="/category" className="col text-center" style={{ textDecoration: "none", color: "black" }}>
                {(props.currentPage === 'Category') ?
                    <>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAA81BMVEUAAAD/AACqAADMAACqAAC/AADRFxe/AAC/FRW/EBC5DAy9CQm/CQm5CQm9CAi3CAi8Dw+7DAy8DAy7Cgq9DQ26DQ27DQ24DQ24DAy8DAy6Cwu8Cwu9Cwu+DQ28DAy9Cwu9DQ28DAy8Cwu8DQ27DAy8DAy6Cwu7DAy7DAy6DAy8DAy7DAy6Cwu7DAy8Cwu7DAy8DAy7DAy7DAy7DAy7Cwu8DAy7DAy7DAy6DAy7DAy7DAy7Cwu7DAy7Cwu7DAy7DAy7DAy6DAy8DAy7DAy7DAy8DAy7DAy7Cwu8Cwu7DAy7Cwu7Cwu7DAy7DAy7DAy8DAy7DAwHn7JSAAAAUHRSTlMAAQMFBggLDAwQFhscHR8gIikqMTo7PD1BQUNERk5YWWRub3mEhYaPkpiYmpymsru7vMPEzc3T1dvc3eDh4ubo6e7u7/Ly8/X29/j5+fz9/tueroMAAAEiSURBVBgZ7cF5MwJxAMfh77bIEZF1teWurJA7tChtrGPzef+vhh2M0Sz7G/+Z8Tz69xfkPf/J9/IyUQqIBSWlywe8CfJK5UHLHXVb4CmVD64kF3yluuNhSNII3CtVpVfRqyU4k6HFFmzJzCHQnZIZoFuUIWBSpgAZytaBelYmnHNi545S2ZsRcApEm7Z+NnMM3Kxo5QY4ntEPrLUQ2M9Jyh0A4Zql70w0gHDdUsxaD4HGhJItd4CTgj4UToDOshKM7QJR1dYnuxoBu2MaVLwELub01dwFcFnUF8O1PjzvZDUou/MM/dqwPs02gXZZScptoDmrd5mNR2BvXMnG94DHjYxi00fA7aq+t3oLHE1LcnqY6c1L25iqSwvXmLly9O/XXgCsemDjRg3GAgAAAABJRU5ErkJggg==" alt="#" width="30" height="30" />
                        <h6 style={{ color: "#BB0C0C" }}>Category</h6>
                    </>
                    :
                    <>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAA3lBMVEUAAAAAAAAAAAAzMzMqKiogICAuLi4qKiowMDAuLi4vLy83Nzc1NTUxMTEwMDA1NTUyMjIxMTE0NDQ1NTU0NDQzMzMyMjIzMzMxMTE1NTUzMzM0NDQ0NDQ0NDQzMzMzMzMzMzMzMzMyMjI0NDQzMzM0NDQzMzMyMjIzMzMzMzMzMzMyMjIyMjI0NDQ0NDQzMzMzMzMzMzMzMzMyMjIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMjIyMjIzMzMzMzMyMjIzMzMzMzMzMzMyMjIzMzMzMzMyMjIzMzMzMzMglmo/AAAASXRSTlMAAQMFBggLDBAWGxwdHyAiKSoxOjs8PUFDREZOWFlkbm95hIWGj5KYmpymsru7vMPEzdPV29zd4OHi5ujp7u/y8/X29/j5/P3+xonyXgAAAR1JREFUGBntwf0zwnAAx/FPDUuYalETecxCHkIaWiNK7///H2KH63Srfc9v7rxe+vcXOH4wDHxHJrYiYtGW0jkRnyJHqXzoerbXBV+pAvAkeRAo1TOvC5KW4EWpDqNDfajArQxVunAsM5dAf01mgH5VhoBVmQJkyG4CTVsm3A6xjqtU1sEIuAZGB5bmK7SBcEc7IdAuaI7M7gA4X5G0cgEMdjOaJd8CBnsZxTJ7A6CVV7LtEGgX9a3YBsJtJcidAqMjSxPW0Qg4zWla9R64K+un8h1wX9UPi403GJ/YmmafjOGtsaiJ0g3QqylJrQfclPQluz8EzpaVbPkMGO5nFVu/Ap7qmq3+BFytS3IjzEQbko+pprT5iJkHV/9+7R2UoVjXn9jtWAAAAABJRU5ErkJggg==" alt="#" width="30" height="30" />
                        <h6>Category</h6>
                    </>
                }

            </Link>
            <Link to="/newarrivals" className="col text-center" style={{ textDecoration: "none", color: "black" }}>
                {(props.currentPage === 'New') ?
                    <>
                        <img src="data:image/png;base64,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" alt="#" width="30" height="30" />
                        <h6 style={{ color: "#BB0C0C" }}>New</h6>
                    </>
                    :
                    <>
                        <img src="data:image/png;base64,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" alt="#" width="30" height="30" />
                        <h6>New</h6>
                    </>
                }
            </Link>
            <Link to="/bag" className="col text-center" style={{ textDecoration: "none", color: "black" }}>
                {(props.currentPage === 'Bag') ?
                    <>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAABU1BMVEUAAAD/AACAAACqAAC/AADMAAC2AADGAACzAADMGhq/AAC8DQ2zDQ2/DQ22DAzCDAzBCQm7CAi7ERG/EBC5Dw+9Dw+/Dg68Cwu+Cwu6Cwu7Cgq6Cgq5CQm7DQ28DQ25DAy9DAy7DAy+Cwu7Cwu7Dg68DQ26DQ2+DQ27DAy8DAy8DAy8Cwu6Cwu8Cwu7Cwu9DQ29DQ28DAy9DAy7DAy9Cwu6Cwu7Cwu8DQ28Cwu6DAy7DAy7DAy7DQ26Cwu8DQ28DQ26DAy7DAy7DAy8DAy7DAy7Cwu6DQ28DQ27DQ27DAy7DAy8DAy8DAy8DQ26DAy8DAy7DAy8DAy7DAy7DAy8DAy8Cwu7DQ28DAy8DAy7DAy7DAy7DAy7DAy8Cwu8Cwu7DAy8DAy7DAy8DAy7DAy7DAy7DAy8DAy7Cwu7Cwu8Cwu7Cwu7Cwu7Cwu6DAy7DAy8DAy7DAx9CacIAAAAcHRSTlMAAQIDBAUHCQoKDBMUFBUVHR4eICEjJC4vMDE0Nzw9Pj5AQ0dLTE5OVldYW1xcXmBkZmhpcHN1dnl9f4SHiYmMkZKTmZqeoKChpamqrre5uru9vr/FycvM0dfb3N3g4+jo6+vt7/Hy9PX29/j5/f7+3LcF+AAAAZhJREFUOMvdlVlXE0EQhSsERAMIKKCBENYoyo4sMqxDoiyuIRoddohgMCzf/3/yIUMm09M94VXvU9c93+lU3ak+EfkvNJh2Li6c9OA90K4crnJdtdhkgYoKyRr3FqBkJ2KxhF2CQvjdOTiKl4/xI8iFzgal+F0RL0HYlBmwvcqGTAjsQMKrEuAYwIevF60irFgVrUDRmm7T5XCIXsWRIPwNky5bVfbxLcUlSyMHplQ4+oNl7SgLsBEwHz3Rzz0Mu6o3cfX9gRZ+Cieql4duLRz5Dc1Bq0nfRx76FfgX+4aP9R7eKFbv+nMDHIyj/cNaffk0OuZaDdMvDHFkYEhERMbAjoiIxL5CUkSkIxBHHvpERGQc+PJMoi/3cOHA7J5Rtw1wdgnczOvj6IBj91i3el3en9NXrrOpxJGCbKXo2Tnn5mCpxRTHgu85SaSl0b8d2Wp4C2aMb62qR38Ypu1outdmBONQf0jRpq/JlDJC6HbM6Z6O767PXjULPy2zPsInD+78Qw1VBztZg34XrW6rczakjbcD//Cf3l8PFrEz+i1b9wAAAABJRU5ErkJggg==" alt="#" width="30" height="30" />
                        <h6 style={{ color: "#BB0C0C" }}>Bag</h6>
                    </>
                    :
                    <>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAABO1BMVEUAAAAAAAAAAAAAAABAQEAzMzMkJCQ5OTkzMzMqKio2NjYzMzMxMTE1NTUzMzMwMDAuLi42NjYzMzMyMjIyMjIxMTE1NTU0NDQxMTEzMzMzMzMyMjIxMTE0NDQxMTEyMjIzMzMyMjIxMTE0NDQyMjIyMjI0NDQyMjIyMjI0NDQyMjIzMzMyMjIzMzMzMzMyMjIzMzMyMjI0NDQzMzMzMzMyMjIyMjIzMzMyMjI0NDQzMzMzMzMzMzMyMjI0NDQzMzM0NDQzMzMzMzMzMzMzMzMzMzMzMzM0NDQzMzMzMzMyMjIzMzMzMzMzMzMyMjIzMzMyMjI0NDQzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMjIzMzMyMjIzMzMzMzPJcwBCAAAAaHRSTlMAAQIDBAUHCQoMExQVHR4gISEjJC4vMDE0Nzw9PkBDR0tMTk5WV1hbXF5gZGZoaXBzdXZ5fX+Eh4mJjJGSk5manqChpamqrre5uru9vr/FycvLzNHX29zd4OPo6+3v8fL09fb3+Pn9/heUT2UAAAGOSURBVDjL3ZVrNwJRFIanckuJimFE7oQSMQmj3G8JMS4pUqL3//8Cp+s0c86Z8ZX9YdbZez1rz97vvGeNIPyLCCbVYlFNBn+B+jNoRsZvxQYKaEchYNGXsBVFcjolpUJo895khpzYOIo5MonpbqSv2EpE0ttsyxSgaJkCpExgFZC0TAJUDti3uCWXgITcjgRQksMDLB1ewI7SPA3fgBdlt5F1V1GKy4wga6waYcc9tpmrxIB9ej8Pe+9p4NpYW/667WHCg8CrsXYHjDJh2wfgokv97DlImwkD/IYnzsc6BNYMpfG9EQ5My+E53e1qnJZCzVJ3eJYjB7HbVP0QIr6z1Q7OK6B+U4YoObKtLQiMy2HBMfeIJkztrhXsxzU75MvkUd1gy+HVXmXf+W74J7/AkWMGSLeTsZN3VJ/jLp4cMd11EmyuXr070p3wERDh3jWjHFnqk/KtYOIMupWXYUO9OyIcMazcsc66OrpeF1oWBR5kfpwB5xrs+4RFdAq7YkEfODrH8kVNxtic/MM/vR8XlqPsj9m6BgAAAABJRU5ErkJggg==" alt="#" width="30" height="30" />
                        <h6>Bag</h6>
                    </>
                }
            </Link>
            <Link to="/personal" className="col text-center" style={{ textDecoration: "none", color: "black" }}>
            {(props.currentPage === 'Personal') ?
                    <>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAACNFBMVEUAAAAAAAD/AACAAAD/AACqAAC/AACZAADMAACqAADVAAC2AAC/AADGAAC5AAC7AAC/EBC0Dw+4Dg68DQ3CDAy5DAy/Cwu4CgrBEhK9CAi/CAi5CAi/Dg66Dg68DQ2+DQ25DQ2/DQ28DAy4DAy+DAy7Cwu8Cwu+Cwu7Cgq4Cgq/CgrADg69CQm5CQm+DQ27DQ28DQ26DAy+DAy7DAy8DAy9DAy8Cwu6Cwu9Cwu7Cwu8Cwu+Dg67Cgq7Dg68DQ27DQ26DQ29DQ27DAy8DAy9Cwu7Cwu8Cwu6Cwu8Cwu9Cwu9DQ27DQ26DQ28DAy8Cgq8DAy8DAy7DAy8DAy8Cwu7Cwu7Cwu7DQ28DQ28DQ27DAy8DAy8DAy7DAy7DAy7DAy7DAy6Cwu8Cwu7DQ28DQ26DQ27DQ27DAy8DAy8DAy7DAy9DAy7DAy7DAy8Cwu7Cwu8Cwu8Cwu6Cwu8DQ27DAy8DAy8DAy8DAy7DAy6DAy7DAy7Cwu8Cwu8DQ27Cwu7DQ27Cwu8DQ27DAy7DAy8DAy8DAy7DAy7DAy7DAy6DAy8DAy7DAy7Cwu6Cwu8Cwu8Cwu8DAy7DAy8DAy7DAy7DAy7DAy8DAy7DAy8DAy7DAy7DAy7DAy8DAy8Cwu7Cwu7Cwu7Cwu8Cwu7DAy7DAy7DAy7DAy7DAy7DAy8DAy8DAy7DAy7DAy7DAy8DAy8DAy7Cwu7Cwu8Cwu7Cwu6Cwu7Cwu7DAy7DAy7Cwu7DAy6DAy7DAy8DAy7DAzxzgXyAAAAu3RSTlMAAQECAgMEBQUGBgcICQsPEBESExUWGBkdHyAhJCUmJygoKisrLS4vMTI0NTY3Ozw9Pz9AQUJFRkZHSEpLS0xPUVFTVFlaXF1fYGBhZGZnZ2ptbm9xdXV5enx9fn+Ag4SGiIuMjY6PkJGSkpOZnJ6foKOjpaerrK2usbOzs7S0tba5vL2+wMPExcbHyMnJzM3P0dLT1dXY2Nna29zf4OHi4+Tl6Onq7O7v8PHy8vP09vb4+fn6+/z8/f7+mbTTLwAAAeBJREFUGBntwelDi3EAB/BvWxvZVEojxxTN3NeYXLnPhJFjsSR3uZMjRyoWuUKU5GjYisRTxvL95/yeZ6d6ypte7vNBXNywG2k/eKbcYYbCWlxx9WiuHupSXJ8p+1M3B7C6qXjrSMJA2p1ehgVKC3sZ1roW/eU8oOA5WbCnsocK6cLG9cc+UqgxI5ahuJfkmw16CJk3KTzOhmDc7SUplSQjYlkLSemQASH7frPCgKDU036Snm1aKCw3KLizEWVZgihrPYXGPAC6cwGSvgINBpWwuZ2C24RFFKTtozCU8c8pFGEiFR2VDqsWaoy2otqflO0AGhjmqyrZOi8DEYkT7LtOuCWGXNMAK8i+Z22M6Hrf9Ki2+t6TZo/EsL5f5IdUCFfI7tmWwls+qnt3cct10j8fspRXpG8WoMnadKTqZTejvE8vO1ePA1wk9yIoy0t25iFkzKS5i5evWmqbmZmMICfJswib/okMOLVQpSsjeXsEIqa2kWyYBhWmuyTvGBAjvYZkz3ET+tHke0leSsI/Evf/IPm9fAZi6Nc1kvQfwACT6yhrOmwfC1nGyjIPhdYFUJN7n0Edr180d1Lx1WXEIBae/8JY7a50DGH0mlMPuyj7Vl9q0+G/EtLMOVPSEDeM/gJYGhq5sVq6mgAAAABJRU5ErkJggg==" alt="#" width="30" height="30" />
                        <h6 style={{ color: "#BB0C0C" }}>Account</h6>
                    </>
                    :
                    <>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAACAVBMVEUAAAAAAAAAAAAAAABAQEAzMzMqKiokJCQgICA5OTkuLi4zMzMwMDAtLS0rKys5OTk2NjYxMTEuLi41NTUzMzM1NTUxMTEwMDAuLi4yMjIwMDAvLy82NjY0NDQzMzMxMTE1NTUzMzMyMjIxMTE0NDQzMzMxMTE1NTU0NDQzMzM0NDQzMzMyMjIxMTE1NTU0NDQzMzMyMjI0NDQzMzMyMjIyMjI0NDQzMzMyMjI0NDQyMjI0NDQ0NDQ0NDQzMzMyMjI0NDQzMzMyMjIyMjIzMzMyMjI0NDQzMzMzMzMzMzMzMzMyMjI0NDQyMjIzMzMyMjIzMzMzMzMzMzMyMjIyMjI0NDQzMzMyMjIzMzMzMzMzMzMzMzMzMzMyMjI0NDQzMzMzMzMzMzMyMjIyMjIzMzMyMjIzMzMzMzMyMjI0NDQzMzMyMjIzMzM0NDQyMjIzMzM0NDQzMzMzMzMzMzM0NDQzMzM0NDQzMzMzMzMyMjIzMzMzMzMyMjI0NDQzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMjIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMjIzMzMzMzMyMjIzMzMzMzMyMjIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMjIzMzMzMzMzMzMzMzMzMzMyMjIzMzMzMzOla6CgAAAAqnRSTlMAAQIDBAUGBwgJCw8QERISExUWGBkdHyAhJCUmJicoKistLi8xMjQ1Njc7PD0/P0BBQkVGR0hKS0xPUVNUWVpcXV9gYWRmZ2ptbm9xcXV5enx9fn+AgIOEhoiLjI2Oj5CRkpOZnJ6foKOjpaerrK2usbO0tba5vL2+wMPExcbHyMnMzc/R0tPV1djZ2tvc3+Dh4uPk5ejp6uzu7u/w8fLz9Pb4+Pn6+/z9/vGRVbsAAAHYSURBVBgZ7cHpQ4txAAfw77OtNhXSyJXZzH2NDSV3lDliMUnO5U6ORcUikaORHA2bMjWztu9f6fc8O9VT3vRynw/y8mZcgf3U1RZnBRTWxtZ75x06qCs+852yRNdawOqj4qOzEJNp6oJMizcfizJtoBoTmZ9RCFyuPdoWpSJyc+/uC18pdCxFLn1jlOSHPToI5V4KvSYIhiNBkpGmImRse0cyclqPlPpxtuqRVOKJkQzUaKCweCn4TMiybEWWtZtCXxUA7fU4yVCthClJ+4co+IzYTOH3oUJMZ8FrCg1YRMVwm9OqgRqDraHzD2V1QA/TQt6mmvVlyNAstB++5Isw5b4E7CATrwaZEf7c39v58MkLfyDCtMQ4+aUEwl1ydI3lePsPqvt068ADMrYBsmI/GVoNSKZ957z9o8wKvrzj2jkfcJOsR5IpSI5UIWX24nVbtlc6bKvKi5DkInkNaSu+kXGXBqq0HpLtBchYPkiyxwwVxsckH+mRo7SDZPSiERNIB4MkbxfiH5oTYyTHWlYih25XH8nYSUyypIuyt2ft8yArq/QEKAxshBrHUyYNv3/jH6Ei7DZgCptu/GSuIXcppjGr+srzMGW/upttWvyXNLfCvGwO8mbQX+m7AQtdWZEZAAAAAElFTkSuQmCC" alt="#" width="30" height="30" />
                <h6>Account</h6>
                    </>
                }
            </Link>
        </div>
    );
}

export default Footer;
