type LayoutTypes = {
  children: React.ReactNode;
};

const LoginFormLayout = ({ children }: LayoutTypes) => {
  return (
    <div className="w-[350px] h-fit ">
      <div className="border-[1px]  ">
        <div
          className="w-44 h-14 bg-no-repeat  bg-logo bg-pos"
          style={{ backgroundImage: "url(/img/instagramLogo.png)" }}
        ></div>
        <form action="" className="flex items-center  flex-col">
        {children}
        </form>
      </div>
      <div className="h-fit border-[1px] text-center p-4">
        Hesabın yok mu? <span className="text-blue-600">Kaydol</span>
      </div>
      <div>
        <div>Uygulamayı indir</div>
        <div>
          <div>Google Play</div>
          <div>Microsofttan edin</div>
        </div>
      </div>
    </div>
  );
};
export default LoginFormLayout;
