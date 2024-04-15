import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // Aquí puedes hacer la petición a tu API, guardar en localStorage, etc.
  });

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        {...register("name", {
          required: {
            value: true,
            message: "El nombre es requerido",
          },
          minLength: {
            value: 2,
            message: "El nombre debe tener al menos 2 caracteres",
          },
        })}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <label htmlFor="correo">Correo</label>
      <input
        type="email"
        {...register("correo", {
          required: {
            value: true,
            message: "El correo es requerido",
          },
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "El correo no es valido",
          },
        })}
      />
      {errors.correo && <span>{errors.correo.message}</span>}

      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        {...register("password", {
          required: {
            value: true,
            message: "La contraseña es requerida",
          },
          minLength: {
            value: 6,
            message: "La contraseña debe tener al menos 6 caracteres",
          },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <label htmlFor="confirm">Confirmar Contraseña</label>
      <input
        type="password"
        {...register("confirm", {
          required: {
            value: true,
            message: "La confirmación de contraseña es requerida",
          },
          validate: (value) =>
            value === watch("password") || "Las contraseñas no coinciden",
        })}
      />
      {errors.confirm && <span>{errors.confirm.message}</span>}

      <label htmlFor="nacimiento">Fecha de nacimiento</label>
      <input
        type="date"
        {...register("nacimiento", {
          required: {
            value: true,
            message: "La fecha de nacimiento es requerida",
          },
          validate: (value) => {
            const fechaNacimiento = new Date(value);
            const fechaActual = new Date();
            const edad =
              fechaActual.getFullYear() - fechaNacimiento.getFullYear();

            return edad >= 18 || "Debes ser mayor de edad";
          },
        })}
      />
      {errors.nacimiento && <span>{errors.nacimiento.message}</span>}

      <label htmlFor="pais">Pais</label>
      <select {...register("pais")}>
        <option value="mx">Mexico</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      {watch("pais") === "ar" && (
        <>
          <label htmlFor="provincia">Provincia</label>
          <select {...register("provincia")}>
            <option value="bue">Buenos Aires</option>
            <option value="cat">Catamarca</option>
            <option value="cor">Córdoba</option>
          </select>
        </>
      )}

      <label htmlFor="foto">Archivo</label>
      <input
        type="file"
        onChange={(e) => {
          console.log(e.target.files[0]);
          setValue("foto", e.target.files[0].name);
        }}
      />

      <label htmlFor="terminos">Acepto términos y condiciones</label>
      <input
        type="checkbox"
        {...register("terminos", {
          required: {
            value: true,
            message: "Debes aceptar los términos y condiciones",
          },
        })}
      />
      {errors.terminos && <span>{errors.terminos.message}</span>}

      <button type="submit">enviar</button>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  );
}

export default App;
