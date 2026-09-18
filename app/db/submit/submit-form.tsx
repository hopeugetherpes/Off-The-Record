'use client'

import { FormEvent, useState } from 'react'

export default function SubmitForm() {
  const [reviewed, setReviewed] = useState(false)

  function reviewSubmission(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setReviewed(true)
  }

  return (
    <form className="submit-form" onSubmit={reviewSubmission}>
      <fieldset>
        <legend>01 / General</legend>
        <div className="form-grid two-columns">
          <label>Drop name<input name="name" required /></label>
          <label>Drop size<input name="size" placeholder="For example: 16 GB" required /></label>
          <label>Drop type
            <select name="type" required defaultValue="USB drop">
              <option>USB drop</option><option>USB extension</option><option>Other</option>
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>02 / Location</legend>
        <div className="form-grid two-columns">
          <label>Country<input name="country" required /></label>
          <label>State or region<input name="state" /></label>
          <label>City<input name="city" required /></label>
          <label>Postal code<input name="postal-code" /></label>
          <label className="wide-field">Street address<input name="street" /></label>
        </div>
      </fieldset>

      <fieldset>
        <legend>03 / Coordinates</legend>
        <p className="form-help">Add coordinates when possible so the public position is unambiguous.</p>
        <div className="form-grid two-columns">
          <label>Latitude<input name="latitude" inputMode="decimal" placeholder="48.8566" /></label>
          <label>Longitude<input name="longitude" inputMode="decimal" placeholder="2.3522" /></label>
        </div>
      </fieldset>

      <fieldset>
        <legend>04 / Documentation</legend>
        <p className="form-help">Prepare three square-friendly JPEG photographs, each no larger than 1 MB.</p>
        <div className="form-grid three-columns">
          <label>Overview<input name="overview" type="file" accept="image/jpeg" /></label>
          <label>Medium distance<input name="medium" type="file" accept="image/jpeg" /></label>
          <label>Close-up<input name="closeup" type="file" accept="image/jpeg" /></label>
        </div>
        <label className="textarea-field">Story and directions
          <textarea
            name="about"
            rows={8}
            placeholder="Explain how to find the drop, describe the neighborhood, note any access requirements and add maker credits."
          />
        </label>
      </fieldset>

      <div className="submit-review">
        <div>
          <p className="eyebrow">Before publishing</p>
          <p>This local mirror can review the form, but it does not upload files or publish a database entry.</p>
        </div>
        <button className="button button-dark" type="submit">Review entry</button>
      </div>
      {reviewed && (
        <p className="form-result" role="status" aria-live="polite">
          Draft checked locally. Nothing was uploaded or sent from this page.
        </p>
      )}
    </form>
  )
}
