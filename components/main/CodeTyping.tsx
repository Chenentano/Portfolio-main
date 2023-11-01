import React, { Component } from 'react';

class CodeBackground extends Component {
  private animationInterval: NodeJS.Timeout | null = null;

  state = {
    code: '',
  };

  componentDidMount() {
    this.startCodeAnimation();
  }

  componentWillUnmount() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  startCodeAnimation = () => {
    this.animationInterval = setInterval(() => {
      const randomCode = `console.log('Dein Code hier: ${Math.random()}');`;
      this.setState({ code: randomCode });

      // Lösche den Code nach einigen Sekunden
      setTimeout(() => {
        this.setState({ code: '' });
      }, 2000); // 2 Sekunden Anzeigedauer
    }, Math.floor(Math.random() * 6000) + 5000); // Zufällige Abstände zwischen 5 und 10 Sekunden
  }

  render() {
    const { code } = this.state;

    return (
      <div className="code-background">
        <pre>
          {code.split('').map((char, index) => (
            <span key={index} className="typing-animation">
              {char}
            </span>
          ))}
        </pre>
      </div>
    );
  }
}

export default CodeBackground;
