<form class="login-form" id="login-form">
    <div class="felment-main-wrap">
        <div class="column-12">
            <input type="text" class="textbox felment" placeholder="Your Name *" tabindex="1" name="fullname" id="name">
        </div>
        <div class="column-12">
            <div class="column-6">
                <input type="text" class="textbox felment" placeholder="Email *" tabindex="2" name="email" id="email">
            </div>
            <div class="column-6">
                <input type="tel" class="textbox " placeholder="Phone *" tabindex="3" name="phone" id="phone">
            </div>
        </div>
        <div class="column-12">
            <select name="1"  class="selectbox1" tabindex="4">
                <option value="">I am a ...</option>
                <option value="Alabama1">Alabama1</option>
                <option value="Arizona1">Arizona1</option>
                <option value="Arkansas1">Arkansas1</option>
                <option value="California1">California1</option>
                <option value="Alberta1">Alberta1</option>
                <option value="British Columbia1">British Columbia1</option>
            </select>
        </div>
        <div class="column-12">
            <textarea class="texarea felment" placeholder="Message *" tabindex="5" name="message" id="message"></textarea>
        </div>
        <div class="column-12">
            <div class="checkbox-custom">
                <input type="checkbox" name="checkboxG1" id="checkboxG1" class="css-checkbox" tabindex="6" />
                <label for="checkboxG1" class="css-label"></label>
          <p>Ultrices parturient ornare montes dictum scelerisque diam nostra pretium habitant sagittis accumsan viverra vehicula habitasse eros dapibus non.</p>
           </div>
        </div>
        <div class="column-12">
            <div class="submit-wrap">
                <input class="submit-button" type="submit" title="Submit" tabindex="7" value="Send">
            </div>
        </div>
        <div class="successmsg">Thank you for contacting us</div>
        <div id="messageBox1" style="display:none;" aria-hidden="true" aria-live="polite">Oops! Please enter your <span class="errorlabel"></span></div>
    </div>
</form>