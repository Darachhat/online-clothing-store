import React, { useContext, useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(true);

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } =
    useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="រូបសញ្ញា" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>ទំព័រដើម</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>សំលៀកបំពាក់</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>អំពីយើង</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>ទំនាក់ទំនង</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => {
            navigate('/collection');
            setShowSearch(true);
          }}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="ស្វែងរក"
        />

        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate('/login'))}
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="គណនី"
          />
          {/* Dropdown Menu */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">
                  ការបញ្ជាទិញរបស់ខ្ញុំ
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  ចាកចេញ
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="រទេះទំនិញ" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={handleClick}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="ម៉ឺនុយ"
        />
      </div>

      {/* SideBar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="ថយក្រោយ" />
            <p>ថយក្រោយ</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">
            ទំព័រដើម
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">
            សំលៀកបំពាក់
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">
            អំពីយើង
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">
            ទំនាក់ទំនង
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
