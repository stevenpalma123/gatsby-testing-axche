import React, { useState } from "react"
import { navigate } from 'gatsby'
import Layout from '../../components/Layout'

import './subscribe.css'

import addToMailchimp from "gatsby-plugin-mailchimp"

export default class SubscribePage extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = e => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        })
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
    }

    _handleSubmit = e => {
        e.preventDefault()

        console.log('submit', this.state)

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`)

                if (result !== 'success') {
                    throw msg
                }
                alert(msg)
            })
            .catch(err => {
                console.log('err', err)
                alert(err)
            })
    }

    render() {
        return (
          <Layout
            bodyClass={`page-template-default page has-no-pagination not-showing-comments footer-top-visible customize-support`}
          >
            <header className="blog-header has-text-align-center header-footer-group">
              <div className="blog-header-inner section-inner medium">
                <h1 className="entry-title">
                  Subscribe
                </h1>
              </div>
            </header>
            <div className="contact-page">
              <div className="contact-form">
                <div>
                  <form onSubmit={this._handleSubmit}>
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Your Name
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name={'name'}
                          onChange={this._handleChange}
                          id={'name'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'email'}>
                        Your Email
                      </label>
                      <div className="control">
                        <input
                            type="email"
                            onChange={this._handleChange}
                            name="email"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <input
                        className="button is-link"
                        type="submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Layout>
        )
    }
}
