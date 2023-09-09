const LinkSubmit = () => {
  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Tweet URL"
        aria-label="tweet url"
      />
      <button class="btn btn-outline-secondary" type="button" id="submit">
        Submit
      </button>
    </div>
  );
};

export default LinkSubmit;
