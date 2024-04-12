import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Nombre</label>
      <input type="text" {...register("name")} />

      <label htmlFor="correo">Correo</label>
      <input type="email" {...register("correo")} />

      <label htmlFor="password">Contraseña</label>
      <input type="password" {...register("password")} />

      <label htmlFor="confirm">Confirma Contraseña</label>
      <input type="password" {...register("confirm")} />

      <label htmlFor="nacimiento">Fecha de nacimiento</label>
      <input type="date" {...register("nacimiento")} />

      <label htmlFor="pais">Pais</label>
      <select {...register("pais")}>
        <option value="mx">Mexico</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      <label htmlFor="foto">Archivo</label>
      <input type="file" {...register("foto")} />

      <label htmlFor="terminos">Acepto términos y condiciones</label>
      <input type="checkbox" {...register("terminos")} />

      <button type="submit">enviar</button>
    </form>
  );
}

export default App;
